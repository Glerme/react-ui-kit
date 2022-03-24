module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
  modulePathIgnorePatterns: ["util"],
  coveragePathIgnorePatterns: ["/src/util/"],
};
