export interface NavigationFacade {
  navigate: (path: string) => void;
  goBack: () => void;
  getCurrentPath: () => string;
}