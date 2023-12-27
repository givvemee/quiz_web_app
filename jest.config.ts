module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
    '^@/styles/(.*)$': '<rootDir>/styles/$1',
  },
  transformIgnorePatterns: ['/node_modules/', '/config/', './styles/*'],
};
