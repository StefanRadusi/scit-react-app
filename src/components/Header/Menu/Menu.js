import React from "react";
import MenuButton from "../Menu/MenuButton/MenuButton";
import MenuPages from "../Menu/MenuPages/MenuPages";
import CloseMenu from "../Menu/MenuPages/CloseMenu/CloseMenu";
import "./Menu.css";

export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      pages: [1, 2, 3, 4, 5, 6, 7],
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
          <MenuPages pages={this.state.pages}>
            <CloseMenu closeMenu={this.handleCloseMenu} />
          </MenuPages>
        ) : null}
      </div>
    );
  }
}
