import React from "react";

const InputTime = props => {
  return (
    <input type="text" className="input" onChange={props.storeInputText} />
  );
};
export default InputTime;
