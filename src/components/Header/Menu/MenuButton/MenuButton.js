import React from 'react';
import './MenuButton.css';

export function MenuButton(props) {
  return (
    <div
      className="menu-button"
      id="menu-button"
      onClick={props.openMenuPages}
    >
      <img alt="img" src="https://www.stickpng.com/assets/images/588a6507d06f6719692a2d15.png" />
    </div>
  );
}