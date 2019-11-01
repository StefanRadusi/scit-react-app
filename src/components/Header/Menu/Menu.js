import React from 'react';
import './Menu.css';
import { MenuPages } from './MenuPages/MenuPages';
import { MenuButton } from './MenuButton/MenuButton';

export function Menu (props) { 
  
    return (
      
      <div className="menu-container">        
        <MenuButton 
          toggleMenuPages={props.toggleMenuPages} 
          />
        
        <div >
        {props.showMP ?
        <MenuPages           
          closeMenuPages={props.toggleMenuPages} 
          anotherChange={props.anotherChange1} 
          activeRoute={props.activeRoute} 
          showMP={props.showMP}
          toggleMenuPages={props.toggleMenuPages}
          />
          :null}
        </div> 
      </div>      
    );  
}
