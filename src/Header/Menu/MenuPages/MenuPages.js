import React from 'react';
import './Pages/Pages.css';
import {CloseBtn} from './CloseBtn/CloseBtn';
import {Pages} from './Pages/Pages';

export function MenuPages ({openPages}){
    return (
        <div className = "menu-pages-conatainer" id='pages' >
            <div className ="arrow"></div>
            <CloseBtn openPages ={openPages} />
            <Pages/>
        </div>
    )
}