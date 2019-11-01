import React from 'react';
import '../MenuPages/PageButton/PagesButton.css'
import { CloseBtn } from './CloseBtn/CloseBtn';
import { PageButton } from './PageButton/PageButton';


export function MenuPages(props) {
    
    return (

        <div className="menu-pages-container" id='pages' >
            <div className="arrow"></div>
            <div className='pages'>
                <PageButton text='Home' selectPages={props.selectPages} clickedPage={props.clickedPage}/>
                <PageButton text='Contact' selectPages={props.selectPages} clickedPage={props.clickedPage} />
                <PageButton text='Events' selectPages={props.selectPages} clickedPage={props.clickedPage}  />
                <PageButton text='Useful' selectPages={props.selectPages} clickedPage={props.clickedPage}   />
                <PageButton text='Users' selectPages={props.selectPages} clickedPage={props.clickedPage}
                />
              
            </div>
            <CloseBtn open={props.open} /> 
        </div> 

    )
}

