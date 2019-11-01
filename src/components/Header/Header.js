import React from 'react';
import './Header.css';
import {Menu} from './Menu/Menu';
import {Profile} from './Profile/Profile';

export function Header(props) {
  return (
    
    <div className='header'>
      <Menu 
      anotherChange1={props.anotherChange2} 
      activeRoute={props.activeRoute} 
      
      toggleMenuPages={props.toggleMenuPages}
      showMP={props.showMP}
      />
      <Profile/>
      </div>
  );
}

