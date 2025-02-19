import React from "react";
import "./style.css";
import Logo from "../Logo/Logo";

const NavBar = ({ children }) => {

  return (
    <nav className="nav-bar">
      <Logo /> 
      {children}
    </nav>
  );
};

export default NavBar;
