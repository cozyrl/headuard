// Please refer to the following documentation: https://jestjs.io/docs/configuration.

import { Config } from 'jest';

// Jest configuration object.
const configuration: Config = {
  transform: { "^.+\\.tsx?$": "ts-jest" },
  testRegex: ".*\\.(test|spec)?\\.[jt]sx?$",
  moduleFileExtensions: ["ts", "tsx", "js"],
  roots: [ "source" ],
  testEnvironment: "jsdom"
}

export default configuration;