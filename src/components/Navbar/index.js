import React from "react";
import "./style.css";

const Nav = props => (
  <nav>
    <h2 id="rw">{props.correctIncorrect}</h2>
    <ul>
      <li>Current Score: {props.score}</li>

      <li>Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;