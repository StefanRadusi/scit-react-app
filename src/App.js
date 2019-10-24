import React from 'react';
import './App.css';
import { Header } from './Header/Header';
import {Body} from "./Body/Body";
import { BrowserRouter as Router, } from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Body/>
    </div>
    </Router>
  );
}

export default App;
