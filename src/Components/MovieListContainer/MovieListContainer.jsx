import React, { useState } from "react";
import Button from "../../ReusableComponents/Button/Button";
import "./style.css"

const MovieListContainer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <Button
        className="btn-toggle"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </Button>
      {isOpen && children }
    </div>
  );
};

export default MovieListContainer;
