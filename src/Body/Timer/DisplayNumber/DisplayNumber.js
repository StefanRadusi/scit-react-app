import React from 'react'
 import './DisplayNumber.css'

export function DisplayNumber({displaySecond1, displaySecond2, displayMinute1, displayMinute2}){
    return(
<div className = 'displayNumber'>
<p>{displayMinute2}</p>
<p>{displayMinute1}</p>
<p>:</p>
    <p>{displaySecond2}</p>
    <p>{displaySecond1}</p>



</div>
    )
}