import React, { createContext, useContext, useState, useEffect } from 'react';
import type { AuthState, User } from '../types/auth';
import { storage } from '../utils/storage';

interface AuthContextType extends AuthState {
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    hasVisited: storage.hasVisited(),
  });

  useEffect(() => {
    const auth = storage.getAuth();
    if (auth) {
      setState(prev => ({ ...prev, user: auth, isAuthenticated: true }));
    }
  }, []);

  const login = (user: User) => {
    storage.setAuth(user);
    setState(prev => ({ ...prev, user, isAuthenticated: true }));
  };

  const logout = () => {
    storage.clearAuth();
    setState(prev => ({ ...prev, user: null, isAuthenticated: false }));
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};