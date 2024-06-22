import React from "react";
import MovieListContainer from "../MovieListContainer/MovieListContainer";
import MovieList from "../MovieList/MovieList";
import WatchedMoviesSummary from "../WatchedMoviesSummary/WatchedMoviesSummary";
import WatchedMovie from "../WatchedMovie/WatchedMovie";
import Loading from "../../ReusableComponents/Loading/Loading";
import ErrorMessage from "../../ReusableComponents/ErrorMessage/ErrorMessage";
import SelectedMovie from "../SelectedMovie/SelectedMovie";

const Main = ({
  movies,
  watched,
  isLoading,
  error,
  selectedId,
  onSelectMovie,
  onCloseMovie,
  onAddWatched,
  onDeleteWatched,
}) => {
  return (
    <main className="main">
      <MovieListContainer>
        {isLoading && <Loading />}
        {!isLoading && !error && (
          <MovieList movies={movies} onSelectMovie={onSelectMovie} />
        )}
        {error && <ErrorMessage message={error} />}
      </MovieListContainer>
      <MovieListContainer>
        {selectedId ? (
          <SelectedMovie
            selectedId={selectedId}
            onCloseMovie={onCloseMovie}
            watched={watched}
            onAddWatched={onAddWatched}
          />
        ) : (
          <>
            <WatchedMoviesSummary watched={watched} />
            <WatchedMovie watched={watched} onDeleteWatched={onDeleteWatched} />
          </>
        )}
      </MovieListContainer>
    </main>
  );
};

export default Main;
