// Navigation facade for Web (using window.history and window.location)
import type { NavigationFacade } from './types';

export const navigation: NavigationFacade = {
  navigate: (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  },
  goBack: () => {
    window.history.back();
  },
  getCurrentPath: () => {
    return window.location.pathname;
  },
};