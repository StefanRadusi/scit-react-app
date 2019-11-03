import React from "react";

export function StartTimerButton(props) {
  return (
    <div className="StartTimerButton">
      <button onClick={props.onClick}>Start Timer</button>
    </div>
  );
}
