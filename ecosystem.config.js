module.exports = {
  apps: [
    {
      name: 'htmhealthcare',
      script: 'node_modules/.bin/next',
      args: 'start -p 3001',
      cwd: '/var/www/htmhealthcare',
      env: {
        NODE_ENV: 'production',
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
    },
  ],
}
