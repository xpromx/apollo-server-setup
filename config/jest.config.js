module.exports = {
  roots: ["../src"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  preset: "ts-jest",
};
