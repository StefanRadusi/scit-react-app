import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

export function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <button className="goToButton">
        <Link to={"/projects/timer"}>Go to timer</Link>
      </button>
      <button className="goToButton">
        <Link to={"projects/weather"}>Go to weather</Link>
      </button>
    </div>
  );
}
