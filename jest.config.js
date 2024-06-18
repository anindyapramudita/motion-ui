export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/lib/$1",
  },

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
