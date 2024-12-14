import React from 'react';
import { Film } from 'lucide-react';
import { MovieCard } from './MovieCard';
import type { Movie } from '../../types/movie';

interface MovieGridProps {
  movies: Movie[];
  loading: boolean;
  onMovieClick: (movie: Movie) => void;
  title?: string;
}

export function MovieGrid({ movies, loading, onMovieClick, title }: MovieGridProps) {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-400 border-t-transparent"></div>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="text-center text-gray-600 mt-12">
        <Film size={48} className="mx-auto mb-4 text-gray-400" />
        <p className="text-xl">No movies found</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {title && <h2 className="text-2xl font-bold text-gray-900">{title}</h2>}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onClick={onMovieClick} />
        ))}
      </div>
    </div>
  );
}