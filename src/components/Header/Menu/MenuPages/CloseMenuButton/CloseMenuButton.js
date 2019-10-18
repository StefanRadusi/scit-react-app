import React from 'react';
import './CloseMenuButton.css';

export function CloseMenuButton(props) {
  return (
    <p 
      className='close-menu-button' 
      onClick={props.closeMenuPages}
    >
      x
    </p>
  )
}

