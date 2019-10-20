import React from 'react'
import './CloseBtn.css'

export function CloseBtn ({closingPage}){
    return (
        
            <img id='close'src='http://cdn.onlinewebfonts.com/svg/img_339941.png' 
            alt = "x"
            onClick = {closingPage}></img>
       
    )
}