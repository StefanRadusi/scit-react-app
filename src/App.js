import React, {Component} from 'react';
import {Header} from './components/Header/Header.js';
import {Body} from './components/Body/Body';

import './App.css';




class App extends Component {

  state = {
    path: "Home",
    showMP: false
  }

  changeRoute = (route) => {
    this.setState({
      path: route 
    });
  } 

  toggleMenuPages = () => {    
    this.setState({showMP: !this.state.showMP});
  }

  hidePages = () => {       
      if (this.state.showMP){
      this.setState({showMP:false});
    }
  }

  render () {    
    return(
    <div className="App" >
      <Header 
        anotherChange2={this.changeRoute} 
        activeRoute={this.state.path} 
        toggleMenuPages={this.toggleMenuPages}
        showMP={this.state.showMP}
        /> 

      <div className='page-container' onClick={this.hidePages} >
        <Body newRoute={this.state.path}
              showMP={this.state.showMP}
        />
      </div> 
    </div>
    )
  };
}

export default App;
