import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [Favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storeFavs = localStorage.getItem("Favorites");
    if (storeFavs) setFavorites(JSON.parse(storeFavs));
  }, []); // ✅ Bug 1 fixed: runs only on mount

  useEffect(() => {
    localStorage.setItem("Favorites", JSON.stringify(Favorites));
  }, [Favorites]);

  const addToFavorites = (movie) => {
    setFavorites(prev => [...prev, movie]);
  };

  const removeFromFavorites = (movieId) => {
    setFavorites(prev => prev.filter(movie => movie.id !== movieId));
  };

  const isFavorite = (movieId) => { // ✅ Bug 3 fixed: consistent name
    return Favorites.some(movie => movie.id === movieId);
  };

  const value = {
    Favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  // ✅ Bug 2 fixed: use MovieContext.Provider, not MovieProvider
  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};