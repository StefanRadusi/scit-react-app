import React from "react";
import "./MenuButton.css";

export default function MenuButton({ toggleMenu }) {
  return (
    <div className="menu-button" onClick={toggleMenu}>
      <img
        alt="menu"
        src="https://www.stickpng.com/assets/images/588a6507d06f6719692a2d15.png"
      />
    </div>
  );
}
