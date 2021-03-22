module.exports = {
  trailingSlash: true,
  target: "experimental-serverless-trace",
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
};
