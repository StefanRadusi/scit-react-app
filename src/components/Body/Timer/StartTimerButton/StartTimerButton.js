import React from "react";

const StartTimerButton = props => {
  console.log(props);
  return (
    <button onClick={props.startTimer} className="startTimer">
      Start Timer
    </button>
  );
};

export default StartTimerButton;
