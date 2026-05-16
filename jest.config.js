module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native|react-native|react-native-.*|@react-native-.*|expo|expo-.*|@expo|@expo/.*|expo-modules-core|@expo(nent)?/.*|@unimodules/.*|unimodules-.*|sentry-expo|native-base|@react-navigation/.*|react-native-paper|react-native-reanimated|react-native-gesture-handler|react-native-safe-area-context|react-native-svg|axios)/)',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@/src/(.*)$': '<rootDir>/src/$1',
  },
};
