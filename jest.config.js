import '@testing-library/jest-dom';

// jest.config.js

module.exports = {
  moduleDirectories: ['node_modules'], // ... other
  // options ...
  testEnvironment: 'node',
  rootDir: './src',
  testMatch: [__dirname + '/src/*.{spec,test}.js'],
  cache: false,
  collectCoverageFrom: [
    '*.spec.js',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/apidoc/**',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
