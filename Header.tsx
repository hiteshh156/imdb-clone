import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Button } from './Button';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-black text-white py-4 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
              alt="IMDb"
              className="h-8"
            />
          </div>
          {isAuthenticated && (
            <Button variant="outline" onClick={logout} className="text-white border-white hover:bg-white/10">
              Sign Out
            </Button>
          )}
        </div>
        {onSearch && (
          <div className="relative">
            <input
              type="search"
              placeholder="Search IMDb"
              className="w-full max-w-2xl mx-auto block px-4 py-2 pl-4 bg-white/10 rounded focus:bg-white focus:text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onChange={(e) => {
                if (e.target.value.length >= 3) {
                  onSearch(e.target.value);
                }
              }}
            />
          </div>
        )}
      </div>
    </header>
  );
}