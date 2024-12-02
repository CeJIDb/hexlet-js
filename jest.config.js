module.exports = {
  testEnvironment: 'node',
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testMatch: [
    '**/tests/**/*.test.js',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
};
