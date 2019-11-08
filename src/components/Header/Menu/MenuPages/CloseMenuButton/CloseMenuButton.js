import React from 'react';
import './CloseMenuButton.css';


export function CloseMenuButton(props) {
    return (
        props.show?
      <div>
        <button className='close-menu' onClick={props.handleCloseMenuButton}>x</button>
      </div> 
      :null
    );
  }