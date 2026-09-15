module.exports = {
  apps: [
    {
      name: "marnibkkhostel.com",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3200",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: "3200",
      },
    },
  ],
};
