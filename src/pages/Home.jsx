import React from "react";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { fetchTrendingMovies, fetchSearchResults } from "../services/api";
import "../CSS/Home.css";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try{
        const popularMovies = await fetchTrendingMovies();
        setMovies(popularMovies);
      }catch(error){
        console.log("Error fetching popular movies:", error);
        setError("Failed to load movies. Please try again later.");
      }
      finally{
        setLoading(false);
      }
    }
    loadPopularMovies();
  },[]);

  // const movies = fetchTrendingMovies();

  const handleSearch = (e) => {
    alert(searchQuery);
    e.preventDefault();
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search Movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (
              <MovieCard movie={movie} key={movie.id}></MovieCard>
            ),
        )}
      </div>
    </div>
  );
}
