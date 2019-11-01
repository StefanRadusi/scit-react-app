import React from 'react';
import Menu from './Menu/Menu';
import { Profile } from './Profile/Profile';
import './Header.css';


export function Header(props) {
  return (
    <div className='header' >
      <Menu
        showMenuPages={props.showMenuPages}
        toggleMenuPages={props.toggleMenuPages}

        selectPages={props.selectPages}
        clickedPage={props.clickedPage}
      />

      <Profile />

    </div>
  );
}

