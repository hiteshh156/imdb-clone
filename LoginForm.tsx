import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { Button } from '../common/Button';
import { useAuth } from '../../context/AuthContext';

export function LoginForm() {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login - In a real app, this would call an API
    setTimeout(() => {
      login({
        id: '1',
        email: 'user@example.com',
        name: 'Movie Lover',
        preferences: {
          favoriteGenres: ['Action', 'Drama'],
          watchlist: [],
        },
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <div className="mt-1 relative">
          <input
            type="email"
            className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            placeholder="Enter your email"
          />
          <Mail className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <div className="mt-1 relative">
          <input
            type="password"
            className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            placeholder="Enter your password"
          />
          <Lock className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <Button type="submit" loading={loading} className="w-full">
        Sign In
      </Button>

      <p className="text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <a href="#" className="text-yellow-600 hover:text-yellow-500">
          Sign up
        </a>
      </p>
    </form>
  );
}