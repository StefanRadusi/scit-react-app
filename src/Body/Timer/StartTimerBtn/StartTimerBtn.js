import React from 'react';
import  '../DisplayNumber/DisplayNumber.css';

export function StartTimerBtn({startTimer}){
    return (
        <div className = 'displayNumber'>
            <button onClick = {startTimer} >Start</button>
        </div>
    )
}