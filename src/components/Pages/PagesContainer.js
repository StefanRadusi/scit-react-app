import React from 'react';
import './Pages.css';
import {CloseBtn} from './CloseBtn';
import {Pages} from './Pages';

export function PagesContainer ({closingPage}){
    return (
        <div className = "menu-pages-conatainer" id='pages' >
            <div className ="arrow"></div>
            <CloseBtn closingPage ={closingPage} />
            <Pages/>
        </div>
    )
}