import React from 'react';
import {Header, ContentApp2} from './components/Header/Header';
import ContentApp from './components/ContentApp/ContentApp';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ContentApp2 text="nume" showDecoration="true" />
      <ContentApp />
    </div>
  );
}

export default App;
