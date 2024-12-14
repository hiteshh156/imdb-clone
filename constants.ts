export const STORAGE_KEYS = {
  AUTH: 'moviedb_auth',
  VISITED: 'moviedb_visited',
  WATCHLIST: 'moviedb_watchlist',
} as const;

export const API_CONFIG = {
  BASE_URL: 'https://www.omdbapi.com',
  POSTER_URL: 'https://img.omdbapi.com',
  API_KEY: import.meta.env.VITE_OMDB_API_KEY,
} as const;

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  MOVIE: '/movie',
} as const;