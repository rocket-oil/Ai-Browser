module.exports = {
  webpack: (config) => {
    config.externals = [...config.externals || [], 'chrome-aws-lambda'];
    return config;
  }
};