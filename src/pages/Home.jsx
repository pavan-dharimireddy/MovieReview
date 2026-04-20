import React from "react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

export default function Home() {
    
    const[searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "movie1", release_date: "2020" },
    { id: 2, title: "movie2", release_date: "2021" },
    { id: 3, title: "movie3", release_date: "2022" },
    { id: 4, title: "movie4", release_date: "2023" },
    { id: 5, title: "movie5", release_date: "2024" },
  ];

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
          onChange={(e)=> setSearchQuery(e.target.value)}
        ></input>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}
