import React from 'react';
import { X, Star } from 'lucide-react';
import type { MovieDetails } from '../../types/movie';

interface MovieDetailsModalProps {
  movie: MovieDetails;
  onClose: () => void;
}

export function MovieDetailsModal({ movie, onClose }: MovieDetailsModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70"
          >
            <X size={20} />
          </button>
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'}
            alt={movie.Title}
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">{movie.Title}</h2>
            <div className="flex items-center gap-1">
              <Star className="text-yellow-400 fill-yellow-400" size={20} />
              <span className="font-semibold">{movie.imdbRating}</span>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-gray-700">{movie.Plot}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900">Released</h3>
                <p className="text-gray-600">{movie.Released}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Runtime</h3>
                <p className="text-gray-600">{movie.Runtime}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Genre</h3>
                <p className="text-gray-600">{movie.Genre}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Director</h3>
                <p className="text-gray-600">{movie.Director}</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Cast</h3>
              <p className="text-gray-600">{movie.Actors}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}