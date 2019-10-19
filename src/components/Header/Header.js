import React from "react";
import Menu from "./Menu/Menu";
import Profile from "./Profile/Profile";
import "./Header.css";

export function Header({ changePage }) {
  return (
    <div className="header">
      <Menu changePage={changePage} />
      <Profile />
    </div>
  );
}
