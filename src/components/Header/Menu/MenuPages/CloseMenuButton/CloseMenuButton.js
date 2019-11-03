import React from 'react';
import './CloseMenuButton.css';


export  function CloseButton(props) {
  return (
    
    <div>
    <button
    className='close-pages' 
    onClick={props.handleCloseButton}>x</button>
    </div>
    
  );
}