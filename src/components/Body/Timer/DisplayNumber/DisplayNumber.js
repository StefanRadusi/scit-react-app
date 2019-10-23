import React from "react";
import "./DisplayNumber.css";
function DisplayNumber(props) {
  return (
    <div className="displayNumber">
      <p>{props.text}</p>
    </div>
  );
}

export default DisplayNumber;
