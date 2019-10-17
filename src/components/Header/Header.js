import React from 'react';
import {Menu} from './../Menu/Menu';
import {Profile} from './../Profile/Profile';

import './Header.css';

export function Header() {
    return (<div className="header">
        <Menu/>
        <Profile/>
    </div>)
}

