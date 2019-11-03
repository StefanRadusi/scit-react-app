import React from 'react';
import './MenuPages.css';
import { PageButton } from './PageButton/PageButton';
import { CloseButton } from './CloseButton/CloseButton';

export function MenuPages(props) {
  return (
    props.show ? 
    <div className='menu-pages'> 	
      <div class='arrow'></div>
      <CloseButton closeMenuPages={props.closeMenuPages} />
      
      <div className='pages-container'>
        <PageButton  text='Home' changePage={props.changePage}/>
        <PageButton  text='Events' changePage={props.changePage}/>
        <PageButton  text='Users' changePage={props.changePage}/>
        <PageButton  text='Useful' changePage={props.changePage}/>
        <PageButton  text='Contact' changePage={props.changePage}/>
      </div>
    
    </div> 
    : null
  );
}