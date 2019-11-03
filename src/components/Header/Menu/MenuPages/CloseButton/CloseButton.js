import React from 'react';
import './CloseButton.css';

export function CloseButton(props){
    return(
            
        <button className='close-btn' onClick={props.closeMenuPages}>X</button>
    )
}
