import React from 'react';
import './Body.css';
import {Pages} from './Pages/Pages.js';

export function Body (props){
    return(
        <div className='pages'>
            <Pages newRoute1={props.newRoute}/>
        </div>
    );
}