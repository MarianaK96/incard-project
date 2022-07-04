// const {defaults} = require('jest-config');
module.exports = {
    testEnvironment: "jsdom",
    moduleDirectories: ["node_modules", "src"],
    roots: ["<rootDir>"],
    modulePaths: ["<rootDir>"],
    moduleDirectories: ["node_modules"],

    moduleNameMapper: {
        "src/(.*)": "<rootDir>/src/$1",
        "tests/(.*)": "<rootDir>/__tests__/$1",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "identity-obj-proxy",
        "\\.(scss|sass|css)$": "identity-obj-proxy"
    },
    setupFiles: ["jest-localstorage-mock"]
};
