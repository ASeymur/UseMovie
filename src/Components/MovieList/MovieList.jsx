import React from "react";
import MovieListItem from "../MovieListItem/MovieListItem";

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <MovieListItem movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
};

export default MovieList;
