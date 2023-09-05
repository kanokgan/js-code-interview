module.exports = {
  setupFilesAfterEnv: ["./setupEnzyme.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "/dist/"],
};
