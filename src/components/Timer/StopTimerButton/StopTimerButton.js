import React from "react";

export function StopTimerButton(props) {
  return (
    <div className="StopTimerButton">
      <button onClick={props.onClick}>Stop Timer</button>
    </div>
  );
}
