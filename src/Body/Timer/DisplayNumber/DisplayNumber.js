import React from 'react'
 import './DisplayNumber.css'

export function DisplayNumber(props){
    return(
<div className = 'displayNumber'>
<p>{props.displayNumber}</p>
</div>
    )
}