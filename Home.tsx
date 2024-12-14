import React, { useState } from 'react';
import { Header } from '../components/common/Header';
import { MovieGrid } from '../components/movies/MovieGrid';
import { FeaturedCategories } from '../components/categories/FeaturedCategories';
import { searchMovies } from '../api/omdb';
import type { Movie } from '../types/movie';

export function HomePage() {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const results = await searchMovies(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMovieClick = (movie: Movie) => {
    window.location.href = `/movie/${movie.imdbID}`;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onSearch={handleSearch} />

      <main className="container mx-auto px-4 py-8">
        {searchResults.length > 0 ? (
          <MovieGrid
            title="Search Results"
            movies={searchResults}
            loading={loading}
            onMovieClick={handleMovieClick}
          />
        ) : (
          <FeaturedCategories onMovieClick={handleMovieClick} />
        )}
      </main>
    </div>
  );
}