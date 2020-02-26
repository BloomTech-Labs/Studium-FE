// jest.config.js
module.exports = {
  moduleDirectories: [
    'node_modules',
    +'./src/' + 'util', // a utility folder
    +__dirname, // the root directory
  ], // ... other options ...
  testEnvironment: 'node',
};
