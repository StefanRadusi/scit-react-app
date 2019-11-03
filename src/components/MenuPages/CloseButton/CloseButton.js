import React from "react";
import "./CloseButton.css";

export function CloseButton(props) {
  return (
    <div
      className="close-button"
      id="close-button"
      onClick={props.closeMenuPages}
    >
      <p id="x">X</p>
    </div>
  );
}
