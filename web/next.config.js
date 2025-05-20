// next.config.js
const path = require("path");
const withNextIntl = require("next-intl/plugin")();

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx"],
  webpack(config) {
    config.resolve.alias["@locales"] = path.resolve(__dirname, "src/locales");
    return config;
  },
};

module.exports = withNextIntl(nextConfig);
