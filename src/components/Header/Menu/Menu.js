import React, { Component } from 'react';
import './Menu.css';
import { MenuPages } from './MenuPages/MenuPages';
import { MenuButton } from './MenuButton/MenuButton';

export class Menu extends Component {
  state = {
    showMenuPages: false,
    linkPressed : this.props.linkPressed,

  };

  toggleMenuPages = () => {
    this.setState({ showMenuPages: !this.state.showMenuPages });
  };
  
  hideMenu = () => {
    this.setState( {showMenuPages:false })
  }
  handleLinks = (event) => {
    const id = event.target.id
    //console.log(id)
    //console.log(event)
    this.setState(
      {showMenuPages: false,
       linkPressed: id 
      }
    )
  }

  render() {
    return (
      <div className="menu-container">
        <MenuButton toggleMenuPages={this.toggleMenuPages} hide/>
        <MenuPages show={this.state.showMenuPages} hideMenu={this.hideMenu} handleLinks={this.handleLinks} />
      </div>
    );
  }
}
