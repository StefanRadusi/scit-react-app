import React from 'react';
import './PageButton.css';


export function PageButton(props) {
    return (
        <div className='page-button' onClick={ () => props.changePage(props.text)}>
            <p>{props.text}</p>

        </div>
    )

}