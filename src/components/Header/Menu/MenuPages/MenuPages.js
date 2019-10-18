import React from 'react';
import './MenuPages.css';


export function MenuPages(props) {
  return (
    props.show ? 
    <div className='menu-pages'> 	
      <div class='arrow'></div>
      this is menu pages
    </div> 
    : null
  );
}