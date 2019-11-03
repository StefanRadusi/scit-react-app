import React, { Component } from 'react';
import './Menu.css';
import { MenuPages } from './MenuPages/MenuPages';
import { MenuButton } from './MenuButton/MenuButton';
import {CloseButton} from '../Menu/MenuPages/CloseMenuButton/CloseMenuButton';

export class Menu extends Component {
  state = {
    showMenuPages: false,
  };
  
  
  
  toggleMenuPages = () => {
    this.setState({ showMenuPages: !this.state.showMenuPages });
  };
  handleCloseButton=() =>{
    this.setState({ showMenuPages:false});
  };
  
   render() {
    return (
      <div className="menu-container">
        <MenuButton toggleMenuPages={this.toggleMenuPages}/>
        <MenuPages show={this.state.showMenuPages}/>
        <CloseButton show={this.state.showMenuPages}/>
        <CloseButton handleCloseButton={this.handleCloseButton}/>
        

      </div>
    );
  }
}
