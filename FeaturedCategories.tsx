import React, { useEffect, useState } from 'react';
import { getSimilarMovies } from '../../api/omdb';
import { MovieGrid } from '../movies/MovieGrid';
import type { Movie } from '../../types/movie';

const FEATURED_CATEGORIES = [
  { id: 'action', title: 'Action Movies', query: 'action' },
  { id: 'comedy', title: 'Comedy Movies', query: 'comedy' },
  { id: 'drama', title: 'Drama Movies', query: 'drama' },
  { id: 'scifi', title: 'Sci-Fi Movies', query: 'sci-fi' },
];

export function FeaturedCategories({ onMovieClick }: { onMovieClick: (movie: Movie) => void }) {
  const [categories, setCategories] = useState<{ [key: string]: { loading: boolean; movies: Movie[] } }>(
    FEATURED_CATEGORIES.reduce((acc, cat) => ({ ...acc, [cat.id]: { loading: true, movies: [] } }), {})
  );

  useEffect(() => {
    FEATURED_CATEGORIES.forEach(async (category) => {
      try {
        const movies = await getSimilarMovies(category.query);
        setCategories(prev => ({
          ...prev,
          [category.id]: { loading: false, movies: movies.slice(0, 5) }
        }));
      } catch (error) {
        console.error(`Error fetching ${category.title}:`, error);
        setCategories(prev => ({
          ...prev,
          [category.id]: { loading: false, movies: [] }
        }));
      }
    });
  }, []);

  return (
    <div className="space-y-12">
      {FEATURED_CATEGORIES.map((category) => (
        <MovieGrid
          key={category.id}
          title={category.title}
          movies={categories[category.id]?.movies || []}
          loading={categories[category.id]?.loading || false}
          onMovieClick={onMovieClick}
        />
      ))}
    </div>
  );
}