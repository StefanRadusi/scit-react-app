import React from 'react';
import './CloseMenuButton.css';

export function CloseMenuButton(props) {
  return (
    props.show?
    <div>
      <button className='close-menu' onClick={props.eventCloseMenuButton}>x</button>
    </div>
    :null
  );
}


