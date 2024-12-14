const STORAGE_KEYS = {
  AUTH: 'moviedb_auth',
  VISITED: 'moviedb_visited',
  WATCHLIST: 'moviedb_watchlist',
};

export const storage = {
  getAuth: () => JSON.parse(localStorage.getItem(STORAGE_KEYS.AUTH) || 'null'),
  setAuth: (data: any) => localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(data)),
  clearAuth: () => localStorage.removeItem(STORAGE_KEYS.AUTH),
  
  hasVisited: () => localStorage.getItem(STORAGE_KEYS.VISITED) === 'true',
  setVisited: () => localStorage.setItem(STORAGE_KEYS.VISITED, 'true'),
  
  getWatchlist: () => JSON.parse(localStorage.getItem(STORAGE_KEYS.WATCHLIST) || '[]'),
  setWatchlist: (list: string[]) => localStorage.setItem(STORAGE_KEYS.WATCHLIST, JSON.stringify(list)),
};