import React, { Component } from 'react';
import './App.css';
import { Header } from './Header/Header';
import { Body } from "./Body/Body";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowMenu: false,
      page: 'Home'
    }
    console.log(this.state.isShowMenu)

  }
//method for changing the state in 
  toggleMenuPages = () => {
    this.setState({
      isShowMenu: !this.state.isShowMenu
    });
  }

//method for hiding the menu onClick in Body
  hideMenu = () => {
    if (this.state.isShowMenu) {
      this.setState({
        isShowMenu: false
      });
    }
  }
  
//method for getting the text value from MenuPages
  selectPages = (clickedPage) => {
    this.setState({
      page: clickedPage
    });
    this.hideMenu();
  }



  render() {
    return (
      <div className="App">
        <Header
          showMenuPages={this.state.isShowMenu}
          toggleMenuPages={this.toggleMenuPages}

          selectPages={this.selectPages}
          clickedPage={this.state.page}
        />

        <Body
          hideMenu={this.hideMenu}
          clickedPage={this.state.page}
        />


      </div>
    );
  }


}

export default App;


