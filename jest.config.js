import '@testing-library/jest-dom';

// jest.config.js

module.exports = {
  moduleDirectories: ['node_modules'], // ... other
  // options ...
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
};
