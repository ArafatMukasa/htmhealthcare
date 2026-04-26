#!/bin/bash
# ============================================================
#  HTM Healthcare — VPS deploy script (shared server safe)
#  Port: 3001  |  Domain: htmhealthcare.com
#  Does NOT touch other apps, PM2 processes, or nginx sites.
# ============================================================
set -e

APP_DIR="/var/www/htmhealthcare"
REPO_URL="https://github.com/ArafatMukasa/htmhealthcare.git"
NGINX_CONF="/etc/nginx/sites-available/htmhealthcare"
PORT=3001

# ------------------------------------
# 1. Pre-flight: check port is free
# ------------------------------------
echo "=== Checking port $PORT is free ==="
if ss -tlnp | grep -q ":$PORT "; then
  echo "ERROR: Port $PORT is already in use. Change PORT in this script."
  exit 1
fi

# ------------------------------------
# 2. Install Node.js only if missing
# ------------------------------------
if ! command -v node &>/dev/null; then
  echo "=== Installing Node.js 20.x ==="
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt install -y nodejs
else
  echo "=== Node.js $(node -v) already installed — skipping ==="
fi

# ------------------------------------
# 3. Install PM2 only if missing
# ------------------------------------
if ! command -v pm2 &>/dev/null; then
  echo "=== Installing PM2 ==="
  npm install -g pm2
else
  echo "=== PM2 $(pm2 -v) already installed — skipping ==="
fi

# ------------------------------------
# 4. Install git if missing
# ------------------------------------
if ! command -v git &>/dev/null; then
  apt install -y git
fi

# ------------------------------------
# 5. Clone or pull latest code
# ------------------------------------
echo "=== Syncing code to $APP_DIR ==="
if [ -d "$APP_DIR/.git" ]; then
  cd "$APP_DIR" && git pull
else
  mkdir -p "$APP_DIR"
  git clone "$REPO_URL" "$APP_DIR"
fi
cd "$APP_DIR"

# ------------------------------------
# 6. Create a minimal .env.local
#    No Supabase credentials needed —
#    this is a marketing-only site.
# ------------------------------------
if [ ! -f "$APP_DIR/.env.local" ]; then
  echo "=== Creating minimal .env.local ==="
  cat > "$APP_DIR/.env.local" <<EOF
NEXT_PUBLIC_APP_URL=https://htmhealthcare.com
EOF
fi

# ------------------------------------
# 7. Install dependencies & build
# ------------------------------------
echo "=== Installing dependencies ==="
npm ci --production=false

echo "=== Building Next.js app ==="
npm run build

# ------------------------------------
# 8. Nginx — add htmhealthcare only.
#    All other nginx sites are untouched.
# ------------------------------------
echo "=== Adding nginx site: htmhealthcare ==="
cp "$APP_DIR/nginx.conf" "$NGINX_CONF"
ln -sf "$NGINX_CONF" /etc/nginx/sites-enabled/htmhealthcare
nginx -t && systemctl reload nginx

# ------------------------------------
# 9. PM2 — start/restart this app only.
#    Other PM2 processes stay running.
# ------------------------------------
echo "=== Starting app with PM2 (port $PORT) ==="
pm2 delete htmhealthcare 2>/dev/null || true
pm2 start "$APP_DIR/ecosystem.config.js"
pm2 save   # saves full process list (keeps other apps alive on reboot)

# Only register PM2 startup if not already registered
if ! systemctl is-enabled pm2-root &>/dev/null 2>&1; then
  echo "=== Registering PM2 startup service ==="
  pm2 startup systemd -u root --hp /root
  systemctl enable pm2-root
fi

# ------------------------------------
# 10. SSL via Let's Encrypt
# ------------------------------------
echo "=== Setting up SSL ==="
if ! command -v certbot &>/dev/null; then
  apt install -y certbot python3-certbot-nginx
fi
certbot --nginx \
  -d htmhealthcare.com \
  -d www.htmhealthcare.com \
  --non-interactive \
  --agree-tos \
  -m araphatarafat@gmail.com

echo ""
echo "=============================================="
echo "  Done!  https://htmhealthcare.com is live."
echo "  App running on port $PORT via PM2."
echo ""
echo "  Useful commands:"
echo "    pm2 status                      # see all apps"
echo "    pm2 logs htmhealthcare          # view logs"
echo "    pm2 restart htmhealthcare       # restart this app"
echo ""
echo "  To redeploy after code changes:"
echo "    cd $APP_DIR && git pull && npm ci && npm run build && pm2 restart htmhealthcare"
echo "=============================================="
