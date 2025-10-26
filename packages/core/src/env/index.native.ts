// Environment variables facade for React Native (Expo)
import Constants from 'expo-constants';

export const env = {
  get(key: string): string | undefined {
    return Constants.expoConfig?.extra?.[key];
  },
  isDev: __DEV__,
  isProd: !__DEV__,
};
