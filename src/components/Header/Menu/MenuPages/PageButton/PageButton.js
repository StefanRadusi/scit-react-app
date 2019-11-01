import React from 'react';
import './PageButton.css';


export function PageButton(props){
    return(
        <div className={`page-button ${props.activeRoute === props.text ? "active" : ""}`} onClick={() => props.changePage(props.text)}>
            <p>{props.text}</p>
        </div>
    )
}