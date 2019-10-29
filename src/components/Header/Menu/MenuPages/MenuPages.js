import React from 'react';
import './MenuPages.css';
import {PageButton} from '../PageButton/PageButton.js';


export function MenuPages(props) {
  return (
    props.show ? 
    <div className='menu-pages'> 	
      <div class='arrow'></div>
      <PageButton pageButtonName ='Home'/>
      <PageButton pageButtonName ='Events'/>
      <PageButton pageButtonName ='Users' />
      <PageButton pageButtonName ='Useful' />
      <PageButton pageButtonName ='Contact' />

    </div> 
    : null
  )
}