import React, { useEffect, useRef } from "react";
import "./style.css"

const Search = ({ type, className, placeholder, value, onChange, query, setQuery }) => {
  const inputEl = useRef(null)

  useEffect(function() {
    inputEl.current.focus()
  }, [])

  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      query={query}
      setQuery={setQuery}
      ref={inputEl}
    />
  );
};

export default Search;
