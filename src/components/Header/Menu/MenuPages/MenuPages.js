import React from 'react';
import './MenuPages.css';
import {PageButton} from './PageButton/PageButton';
import { CloseButton } from './CloseButton/CloseButton';


export function MenuPages(props) {
  return (
    
    props.showMP ?
    <div className='menu-pages'> 	
      <div className='arrow'></div>
      <CloseButton closeMenuPages={props.closeMenuPages} />

      <PageButton text={'Home'} changePage={props.anotherChange} activeRoute={props.activeRoute}/>
      <PageButton text={'Events'} changePage={props.anotherChange} activeRoute={props.activeRoute}/>
      <PageButton text={'Users'} changePage={props.anotherChange} activeRoute={props.activeRoute} />
      <PageButton text={'Useful'} changePage={props.anotherChange} activeRoute={props.activeRoute} />
      <PageButton text={'Contact'} changePage={props.anotherChange} activeRoute={props.activeRoute} />

    </div> 
    : null
  );
}

