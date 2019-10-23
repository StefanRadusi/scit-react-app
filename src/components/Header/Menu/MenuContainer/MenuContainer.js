import React from 'react';
import './MenuContainer.css';
import { PageList } from './MenuPages/PageList/PageList';
import { CloseButton } from './MenuPages/CloseButton/CloseButton';


export function MenuContainer() {
    return(
        <div className='menu-container'>
           <PageList text='Page 1'/>
           <PageList text='Page 2'/>
           <PageList text='Page 3'/>
           <PageList text='Page 4'/>
           <PageList text='Page 5'/>
           <PageList text='Page 6'/>
           <PageList text='Page 7'/>
            <CloseButton/>
        </div>
    
    )
        
}