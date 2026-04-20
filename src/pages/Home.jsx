import React from "react";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const movies = [
    { id: 1, title: "movie1", release_date: "2020" },
    { id: 2, title: "movie2", release_date: "2021" },
    { id: 3, title: "movie3", release_date: "2022" },
    { id: 4, title: "movie4", release_date: "2023" },
    { id: 5, title: "movie5", release_date: "2024" },
  ];

  const handleSearch = (e) => {};
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search Movies..."
          className="search-input"
        ></input>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}
