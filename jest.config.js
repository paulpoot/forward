const nextJest = require('next/jest');
const createJestConfig = nextJest();

const customJestConfig = {
  setupFiles: ['<rootDir>/jest/mocks.ts'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/fileMock.js',
    '^@api(.*)$': '<rootDir>/src/api$1',
    '^@assets(.*)$': '<rootDir>/src/assets$1',
    '^@blocks(.*)$': '<rootDir>/src/blocks$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@atoms(.*)$': '<rootDir>/src/components/atoms$1',
    '^@molecules(.*)$': '<rootDir>/src/components/molecules$1',
    '^@organisms(.*)$': '<rootDir>/src/components/organisms$1',
    '^@templates(.*)$': '<rootDir>/src/components/templates$1',
    '^@contexts(.*)$': '<rootDir>/src/contexts$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@libs(.*)$': '<rootDir>/src/libs$1',
    '^@mocks(.*)$': '<rootDir>/src/mocks$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@typings(.*)$': '<rootDir>/src/types$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/cypress/'],
};

module.exports = createJestConfig(customJestConfig);
