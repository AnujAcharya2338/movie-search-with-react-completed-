import Moviecard from "../components/movieCard";
import "../css/Home.css";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Titanic", release_date: "1996" },
    { id: 2, title: "Hulk", release_date: "2005" },
    { id: 3, title: "Fight Club", release_date: "1997" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search For Movies..."
          className="search_input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="sumbit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map(
          (movie) =>
            (
              <Moviecard movie={movie} key={movie.id} />
            ),
        )}
      </div>
    </div>
  );
}

export default Home;
