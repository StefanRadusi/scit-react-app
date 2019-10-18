import React, { Component } from 'react';
import './Menu.css';
import { MenuPages } from './MenuPages/MenuPages';
import { MenuButton } from './MenuButton/MenuButton';

export class Menu extends Component {
  state = {
    showMenuPages: false,
  };

  openMenuPages = () => {
    this.setState({ showMenuPages: true });
  };

  closeMenuPages = () => {
    this.setState({ showMenuPages: false });
  }

  render() {
    return (
      <div className="menu-container">
        <MenuButton openMenuPages={this.openMenuPages} />
        <MenuPages show={this.state.showMenuPages} closeMenuPages={this.closeMenuPages} changePage={this.props.changePage}/>
      </div>
    );
  }
}
