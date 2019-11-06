import React, {Component} from 'react';
import './MenuLink.css';

export default function MenuLink  ({id,text,handleLink})  {

        return (
            <p className="menu-link-row"><a className="menu-link" id={id} href="#" alt={text} onClick={handleLink}>{text}</a></p>
        );
    }

// export default MenuLink;


