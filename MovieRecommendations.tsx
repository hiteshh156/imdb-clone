import React, { useEffect, useState } from 'react';
import { getSimilarMovies } from '../../api/omdb';
import { MovieGrid } from './MovieGrid';
import type { Movie } from '../../types/movie';

interface MovieRecommendationsProps {
  genre: string;
  onMovieClick: (movie: Movie) => void;
}

export function MovieRecommendations({ genre, onMovieClick }: MovieRecommendationsProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const results = await getSimilarMovies(genre);
        setMovies(results);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [genre]);

  return (
    <div className="mt-8">
      <MovieGrid
        title="You might also like"
        movies={movies}
        loading={loading}
        onMovieClick={onMovieClick}
      />
    </div>
  );
}