module.exports = {
  async rewrites() {
    return [
      {
        source: "https://marketplace.oxsoccer.com",
        destination: "/marketplace",
      },
    ];
  },
};
