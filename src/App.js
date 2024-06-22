import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Main/Main";
import NumResults from "./Components/NumResults/NumResults";
import Search from "./ReusableComponents/Search/Search";
import { useMovies } from "./CustomHooks/useMovies";
import { useLocalStorageState } from "./CustomHooks/useLocalStorageState";


export default function App() {
  const [query, setQuery] = useState('');
  const [watched, setWatched] = useLocalStorageState([], 'watched')
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query, handleCloseMovie)
  
  const handleSelectMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id))
  }

  function handleCloseMovie () {
    setSelectedId(null)
  }

  const handleAddWatched = (movie) => {
    setWatched(watched => [...watched, movie])
  }

  const handleDeleteWatched = (id) => {
    setWatched(watched => watched.filter(movie => movie.imdbID !== id))
  }


  return (
    <>
      <NavBar>
        <Search
          className="search"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          query={query}
          setQuery={setQuery}
        />
        <NumResults movies={movies} />
      </NavBar>
      <Main
        movies={movies}
        watched={watched}
        isLoading={isLoading}
        error={error}
        selectedId={selectedId}
        onSelectMovie={handleSelectMovie}
        onCloseMovie={handleCloseMovie}
        onAddWatched={handleAddWatched}
        onDeleteWatched={handleDeleteWatched}
      />
    </>
  );
}