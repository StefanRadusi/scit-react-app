import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <PageButton name={{text: 'Home'}}/>
      </div>
    );
  }
}
const PageButton = ({name}) => <div className='tab'>{name.text}</div>
export default Home;