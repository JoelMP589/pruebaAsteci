module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transformIgnorePatterns: ["node_modules/(?!axios)"],
    setupFIles: ["./jest.setup.js"]
}