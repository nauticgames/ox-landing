module.exports = {
  async rewrites() {
    return [
      {
        source: "/marketplace",
        destination: "https://marketplace.oxsoccer.com",
      },
    ];
  },
};
