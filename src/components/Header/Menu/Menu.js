import React, { Component } from 'react';
import './Menu.css';
import { MenuPages } from './MenuPages/MenuPages';
import { MenuButton } from './MenuButton/MenuButton';
import { CloseMenuButton } from './MenuPages/CloseMenuButton/CloseMenuButton';

export class Menu extends Component {
  state = {
    showMenuPages: false,
  };

  toggleMenuPages = () => {
    this.setState({ showMenuPages: !this.state.showMenuPages });
  };

  eventCloseMenuButton = () => {
    this.setState({showMenuPages:false});
  };

  render() {
    return (
      <div className="menu-container">
        <MenuButton toggleMenuPages={this.toggleMenuPages}/>
        <MenuPages show={this.state.showMenuPages} />
        <CloseMenuButton eventCloseMenuButton={this.toggleMenuPages}/>
        <CloseMenuButton show={this.state.showMenuPages}/>
      </div>
    );
  }
  }
