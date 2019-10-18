import React, {Component} from 'react';
import {Header} from './components/Header/Header.js';

import './App.css';
import { Body } from './components/Body/Body.js';


export default class App extends Component{
  state = {
    currentPage: 'Home'
  }

  changePage = (pageName) => {
    this.setState({currentPage: pageName});
  }


  render() {
    return (
      <div className="App">
        <Header changePage={this.changePage}/>
        <Body 
          currentPage={this.state.currentPage} 
        />
      </div>
    )
  }
}



