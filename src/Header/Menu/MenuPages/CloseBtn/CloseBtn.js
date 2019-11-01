import React from 'react'
import './CloseBtn.css'

export function CloseBtn (props){
    
    return (

        <div id = 'close'>
            <button id = "xButton"
             onClick = {props.open}>X</button>

        </div>
        
            
       
    )
}
