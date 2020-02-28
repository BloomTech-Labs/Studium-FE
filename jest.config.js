import '@testing-library/jest-dom';

// jest.config.js

module.exports = {
  moduleDirectories: ['node_modules'], // ... other
  // options ...
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/*.{test, spec}.{js,jsx}'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
