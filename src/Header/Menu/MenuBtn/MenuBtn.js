import React from 'react';
import './MenuBtn.css'

export function MenuBtn (props){
    
    return (
        <div  className='menu-button' 
        id='menu-button' 
        onClick = {props.open} 
       >
            <img alt = "" src ='https://www.stickpng.com/assets/images/588a6507d06f6719692a2d15.png' ></img>
        </div>
      
    )
}
