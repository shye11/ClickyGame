import React from "react";
import "./style.css";

const Navbar = props => (
    <nav className="navbar">
      <p className="navTitles"  title="Home">Clicky Game</p>
      <p className="navTitles" >Status: {props.status}</p>
      <p className="navTitles" title="Store">Score: {props.currentScore}</p>
      <p className="navTitles" title="Contact">Top Score: {props.topScore}</p>
    </nav>
);

export default Navbar;
