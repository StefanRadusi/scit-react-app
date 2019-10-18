import React from 'react';
import './Header.css';
import {Menu} from './Menu/Menu';
import {Profile} from './Profile/Profile';

export function Header(props) {
  return (
    
    <div className='header'>
      <Menu changePage={props.changePage}/>
      <Profile/>
      </div>
  );
}

