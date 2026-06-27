// PM2 process file — run with: pm2 start ecosystem.config.cjs
module.exports = {
  apps: [
    {
      name: "kabir-portfolio",
      cwd: "./server",
      script: "index.js",
      instances: 1,
      autorestart: true,
      max_memory_restart: "300M",
      env: {
        NODE_ENV: "production",
        PORT: 5000,
      },
    },
  ],
};
