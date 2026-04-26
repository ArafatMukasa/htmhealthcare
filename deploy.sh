#!/bin/bash
set -e

APP_DIR="/var/www/htmhealthcare"
REPO_URL="https://github.com/ArafatMukasa/htmhealthcare.git"  # update if different
NGINX_CONF="/etc/nginx/sites-available/htmhealthcare"

echo "=== 1. Updating system packages ==="
apt update && apt upgrade -y

echo "=== 2. Installing Node.js 20.x ==="
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

echo "=== 3. Installing PM2 ==="
npm install -g pm2

echo "=== 4. Installing git ==="
apt install -y git

echo "=== 5. Cloning / pulling repo ==="
if [ -d "$APP_DIR/.git" ]; then
  cd "$APP_DIR"
  git pull
else
  mkdir -p "$APP_DIR"
  git clone "$REPO_URL" "$APP_DIR"
  cd "$APP_DIR"
fi

echo "=== 6. Writing .env.local — FILL IN VALUES BEFORE RUNNING ==="
# Uncomment and populate these before running the script:
# cat > "$APP_DIR/.env.local" <<EOF
# NEXT_PUBLIC_SUPABASE_URL=your_value_here
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your_value_here
# SUPABASE_SERVICE_ROLE_KEY=your_value_here
# NEXT_PUBLIC_APP_URL=https://htmhealthcare.com
# EOF

echo "=== 7. Installing dependencies ==="
cd "$APP_DIR"
npm ci --production=false

echo "=== 8. Building Next.js app ==="
npm run build

echo "=== 9. Configuring nginx ==="
cp "$APP_DIR/nginx.conf" "$NGINX_CONF"
ln -sf "$NGINX_CONF" /etc/nginx/sites-enabled/htmhealthcare
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

echo "=== 10. Starting app with PM2 ==="
pm2 delete htmhealthcare 2>/dev/null || true
pm2 start "$APP_DIR/ecosystem.config.js"
pm2 save
pm2 startup systemd -u root --hp /root

echo "=== 11. Setting up SSL with Let's Encrypt ==="
apt install -y certbot python3-certbot-nginx
certbot --nginx -d htmhealthcare.com -d www.htmhealthcare.com --non-interactive --agree-tos -m araphatarafat@gmail.com

echo "=== Done! Site is live at https://htmhealthcare.com ==="
