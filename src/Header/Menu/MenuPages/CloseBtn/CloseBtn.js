import React from 'react'
import './CloseBtn.css'

export function CloseBtn ({openPages}){
    return (
        
            <img id='close'src='http://cdn.onlinewebfonts.com/svg/img_339941.png' 
            alt = "x"
            onClick = {openPages}></img>
       
    )
}