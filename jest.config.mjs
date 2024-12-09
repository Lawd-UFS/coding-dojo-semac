export default {
    transform: {
        "^.+\\.js$": "babel-jest",
    },
    transformIgnorePatterns: ["node_modules/"],
    testEnvironment: "jest-environment-jsdom",
    testMatch: ["**/tests/**/*.test.js"],
};
