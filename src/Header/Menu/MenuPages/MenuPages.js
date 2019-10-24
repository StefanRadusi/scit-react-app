import React from 'react';
import '../MenuPages/PageButton/PagesButton.css'
import { CloseBtn } from './CloseBtn/CloseBtn';
import { Link } from 'react-router-dom';
import {PageButton} from './PageButton/PageButton';


export function MenuPages({ openPages }) {
    return (
        
            <div className="menu-pages-conatainer" id='pages' >
                <div className="arrow"></div>
                <div className='pages'>
                    <Link to='/'><PageButton text = 'Home' /></Link>
                    <Link to='/contact'><PageButton text = 'Contact'/></Link>
                    <Link to='/events'><PageButton text = 'Events'/></Link>
                    <Link to='/useful'><PageButton text = 'Useful'/></Link>
                    <Link to='/users'><PageButton text = 'Users'/></Link>
                    <CloseBtn openPages={openPages} />
                </div>

            </div>
    
    )
}

