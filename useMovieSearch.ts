import { useState, useEffect } from 'react';
import { useDebounce } from './useDebounce';
import { searchMovies } from '../api/omdb';
import type { Movie } from '../types/movie';

export function useMovieSearch(query: string) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (!debouncedQuery) {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const results = await searchMovies(debouncedQuery);
        setMovies(results);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [debouncedQuery]);

  return { movies, loading, error };
}