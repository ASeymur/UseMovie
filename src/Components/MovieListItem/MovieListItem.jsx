import React from "react";

const MovieListItem = ({ movie, onSelectMovie }) => {
  const handleClick = () =>{
    onSelectMovie(movie.imdbID)
  }
  return (
    <li key={movie.imdbID} onClick={handleClick}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>📅</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};

export default MovieListItem;
