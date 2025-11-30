const { override, addWebpackPlugin } = require("customize-cra");
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = override((config) => {
  // Add CompressionPlugin
  config.plugins.push(
    new CompressionPlugin({
      filename: "[path][base].gz",
      algorithm: "gzip",
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    })
  );

  // Allow all dev hosts
  if (config.devServer) {
    config.devServer.allowedHosts = "all";
  }

  // Drop console and debugger in production
  if (config.optimization?.minimizer) {
    config.optimization.minimizer.forEach((minimizer) => {
      if (minimizer instanceof TerserPlugin) {
        minimizer.options.terserOptions = {
          ...minimizer.options.terserOptions,
          compress: {
            ...minimizer.options.terserOptions?.compress,
            drop_console: process.env.NODE_ENV === "production",
            drop_debugger: process.env.NODE_ENV === "production",
          },
        };
      }
    });
  }

  return config;
});
