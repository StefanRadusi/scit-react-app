import React from 'react';
import {Header} from './components/Header/Header.js';

import './App.css';
import { ContentApp } from './components/ContentApp/ContentApp.js';



function App() {
  return (
    <div className="App">
      <Header/>
      <ContentApp text='name' fontSize='30px' />
      <ContentApp text='age' showDecoration={true}/>
    </div>
  );
}

export default App;
