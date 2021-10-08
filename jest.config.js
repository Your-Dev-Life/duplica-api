const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');
const tsJestPreset = require('ts-jest/presets');
const dynamodbPreset = require('@shelf/jest-dynamodb/jest-preset');
const { recursive } = require('merge');

module.exports = recursive(tsJestPreset.jsWithTsESM, dynamodbPreset, {
  rootDir: './src',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  coverageDirectory: '../coverage',
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  collectCoverageFrom: ['**/*.ts'],
  coveragePathIgnorePatterns: ['.d.ts', '<rootDir>/node_modules/', 'health.ts', 'test/', 'database/seed/'],
  resetMocks: true,
  restoreMocks: true,
});
