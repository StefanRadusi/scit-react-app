import React from 'react';
import './Header.css';
import {Menu} from '../Menu/Menu';
import {Profile} from '../Profile/Profile';



export function Header() {
  return (
    <div className='header'>
        <Menu/>
        <Profile/>
    </div>
  );
}

