import React from "react";
import "./CloseMenuButton.css";

const CloseMenuButton = ({ closeMenu }) => {
  return (
    <button className="closeBtn" onClick={closeMenu}>
      X
    </button>
  );
};
export default CloseMenuButton;
