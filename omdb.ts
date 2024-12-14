const API_KEY = 'edca409c';
const BASE_URL = 'https://www.omdbapi.com';
const POSTER_URL = 'https://img.omdbapi.com';

export async function searchMovies(query: string) {
  const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=${query}`);
  const data = await response.json();
  return data.Search || [];
}

export async function getMovieDetails(imdbId: string) {
  const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}&i=${imdbId}&plot=full`);
  return await response.json();
}

export async function getSimilarMovies(genre: string) {
  const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=${genre}&type=movie`);
  const data = await response.json();
  return data.Search || [];
}