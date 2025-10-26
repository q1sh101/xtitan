// Environment variables facade for Web (Vite)
export const env = {
  get(key: string): string | undefined {
    return import.meta.env[key];
  },
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
};
