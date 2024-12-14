import React, { useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { HomePage } from './pages/Home';
import { LoginPage } from './pages/Login';
import { MovieDetailsPage } from './pages/MovieDetails';
import { WelcomePage } from './components/welcome/WelcomePage';
import { storage } from './utils/storage';

function AppContent() {
  const { isAuthenticated, hasVisited } = useAuth();
  const path = window.location.pathname;
  const movieId = path.match(/^\/movie\/([^/]+)/)?.[1];

  useEffect(() => {
    if (!hasVisited) {
      storage.setVisited();
    }
  }, [hasVisited]);

  if (!hasVisited) {
    return <WelcomePage />;
  }

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  if (movieId) {
    return <MovieDetailsPage id={movieId} onClose={() => window.history.back()} />;
  }

  return <HomePage />;
}

// Export the main App component as default
export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
