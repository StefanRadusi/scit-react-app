import React from "react";
import MenuButton from "../Menu/MenuButton/MenuButton";
import MenuPages from "../Menu/MenuPages/MenuPages";
import CloseMenuButton from "./MenuPages/CloseMenuButton/CloseMenuButton";
import pagesList from "./PageList";
import "./Menu.css";

export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      pages: pagesList,
      toggleMenuPages: false
    };
  }
  handleToggleMenuPages = () => {
    this.setState({ toggleMenuPages: !this.state.toggleMenuPages });
  };
  handleCloseMenu = () => {
    this.setState({ toggleMenuPages: false });
  };
  render() {
    return (
      <div className="menu-container">
        <MenuButton toggleMenu={this.handleToggleMenuPages} />
        {this.state.toggleMenuPages ? (
          <MenuPages
            pages={this.state.pages}
            renderPage={this.props.changePage}
            closeMenu={this.handleCloseMenu}
          >
            <CloseMenuButton closeMenu={this.handleCloseMenu} />
          </MenuPages>
        ) : null}
      </div>
    );
  }
}
