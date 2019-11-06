import React, {Component} from 'react';
import './MenuPages.css';
import MenuLink from '../MenuLink/MenuLink';
import HideMenuButton from './HideMenuButton/HideMenuButton'

export function MenuPages ({show, hideMenu, handleLinks})  {
  return (
    show ? 
    <div className='menu-pages' > 	
      <div className='arrow'></div>
      <HideMenuButton hideMenu={hideMenu} />
      <MenuLink text="Menu 1" id="menu1" handleLink={handleLinks} />
      <MenuLink text="Menu 2" id="menu2" handleLink={handleLinks} />
    </div> 
    : null
  );
  }
