import "../css/Favorites.css";
import { useMovieContext } from "../../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { Favorites } = useMovieContext(); // ✅ Bug 3 fixed: correct casing

  if (Favorites.length > 0) {             // ✅ Bug 2 fixed: check array length
    return (                              // ✅ Bug 1 fixed: JSX inline with return
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {Favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No favorite movies yet</h2>
      <p>Start adding movies to favorites</p>
    </div>
  );
}

export default Favorites;