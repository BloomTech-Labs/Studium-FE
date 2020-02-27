import '@testing-library/jest-dom';

// jest.config.js

module.exports = {
  moduleDirectories: ['node_modules'], // ... other
  // options ...
  testEnvironment: 'node',
  rootDir: __dirname + './src',
  collectCoverageFrom: [
    './src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/apidoc/**',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
