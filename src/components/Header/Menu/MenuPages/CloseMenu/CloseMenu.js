import React from "react";
import "./CloseMenu.css";

export default function CloseMenu({ closeMenu }) {
  return (
    <img
      className="close"
      alt="closeMenu"
      src="http://cdn.onlinewebfonts.com/svg/img_339941.png"
      onClick={closeMenu}
    />
  );
}
