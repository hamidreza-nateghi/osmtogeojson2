/**
 * @author
 * Hamidreza Nateghi
 */

import { defaults as tsjPreset } from "ts-jest/presets";

const modulesToTranspile = [].join("|");

export default {
  collectCoverage: true,
  coverageProvider: "v8",
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70,
    },
  },
  // preset: 'ts-jest',
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testEnvironment: "jsdom",
  transform: {
    ...tsjPreset.transform,
    "^.+\\.(t)sx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.test.json",
        diagnostics: false,
        isolatedModules: true,
      },
    ],
  },
  transformIgnorePatterns: [
    `<rootDir>.*(node_modules)/?!(${modulesToTranspile})`,
  ],
  displayName: { name: "osmtogeojson", color: "blue" },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "mjs",
    "cjs",
    "jsx",
    "json",
    "node",
  ],
};
