export interface User {
  id: string;
  email: string;
  name: string;
  preferences?: {
    favoriteGenres?: string[];
    watchlist?: string[];
  };
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  hasVisited: boolean;
}