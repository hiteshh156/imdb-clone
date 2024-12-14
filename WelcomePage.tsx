import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../common/Button';

export function WelcomePage() {
  const { login } = useAuth();

  const handleSkip = () => {
    // Login as guest user
    login({
      id: 'guest',
      email: 'guest@imdb.com',
      name: 'Guest User',
      preferences: {
        favoriteGenres: [],
        watchlist: [],
      },
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center space-y-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
            alt="IMDb"
            className="h-16 mb-8"
          />
          
          <div className="max-w-2xl text-center space-y-6">
            <h1 className="text-4xl font-bold">Welcome to IMDb</h1>
            <p className="text-xl text-gray-300">
              Your ultimate destination for movie ratings, reviews, and recommendations.
              Join millions of movie lovers around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full max-w-4xl">
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-3">Rate & Review</h3>
              <p className="text-gray-400">Share your thoughts on millions of movies</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-3">Personalized</h3>
              <p className="text-gray-400">Get recommendations based on your taste</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-3">Watchlist</h3>
              <p className="text-gray-400">Keep track of movies you want to watch</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button onClick={handleSkip} variant="primary" className="min-w-[200px]">
              Continue as Guest
            </Button>
            <Button
              onClick={() => window.location.href = '/login'}
              variant="outline"
              className="min-w-[200px] border-white text-white hover:bg-white/10"
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}