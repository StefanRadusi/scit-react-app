import React from 'react';
import './Header.css';
import {Profile} from '../Profile/Profile';
import Menu from '../Menu/Menu';


export function Header() {

  return (
    <div className='header' >
      <Menu/>
      <Profile/>
      {/* <Pages/> */}
    </div>
  );
}

