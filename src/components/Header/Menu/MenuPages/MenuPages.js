import React from 'react';
import './MenuPages.css';
import { PageButton } from './PageButton/PageButton';
import { CloseMenuButton } from './CloseMenuButton/CloseMenuButton';


export function MenuPages(props) {
  return (
    props.show ? 
    <div className='menu-pages'> 	
      <div className='arrow'></div>
      <div className='pages-container'>
        <PageButton  text='Home' changePage={props.changePage}/>
        <PageButton  text='Events' changePage={props.changePage}/>
        <PageButton  text='Users' changePage={props.changePage}/>
        <PageButton  text='Useful' changePage={props.changePage}/>
        <PageButton  text='Contact' changePage={props.changePage}/>
      </div>
      <CloseMenuButton closeMenuPages={props.closeMenuPages}/>
    </div> 
    : null
  );
}