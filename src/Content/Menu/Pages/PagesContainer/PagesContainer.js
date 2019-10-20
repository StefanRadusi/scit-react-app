import React from 'react';
import '../PagesContainer/Pages/Pages.css';
import {CloseBtn} from './Pages/CloseBtn/CloseBtn';
import {Pages} from './Pages/Pages';

export function PagesContainer ({openPages}){
    return (
        <div className = "menu-pages-conatainer" id='pages' >
            <div className ="arrow"></div>
            <CloseBtn openPages ={openPages} />
            <Pages/>
        </div>
    )
}