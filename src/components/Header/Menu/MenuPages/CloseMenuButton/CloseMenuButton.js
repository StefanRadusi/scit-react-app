import React from "react";
import "./CloseMenuButton.css";

export default function CloseMenuButton({ closeMenu }) {
  return (
    <img
      className="close"
      alt="closeMenu"
      src="http://cdn.onlinewebfonts.com/svg/img_339941.png"
      onClick={closeMenu}
    />
  );
}
