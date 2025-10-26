// Navigation facade for React Native
// This is a placeholder - actual implementation will be done in apps/native
import type { NavigationFacade } from './types';

export const navigation: NavigationFacade = {
  navigate: (path: string) => {
    console.log('[Navigation] Navigate to:', path);
  },
  goBack: () => {
    console.log('[Navigation] Go back');
  },
  getCurrentPath: () => {
    return '/';
  },
};