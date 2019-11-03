import React from "react";
import { CloseButton } from "./CloseButton/CloseButton";
import "./MenuPages.css";
import { Link } from "react-router-dom";

export function MenuPages(props) {
  return props.show ? (
    <div className="menu-pages">
      <div className="arrow"></div>
      <CloseButton></CloseButton>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Events">Events</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  ) : null;
}
