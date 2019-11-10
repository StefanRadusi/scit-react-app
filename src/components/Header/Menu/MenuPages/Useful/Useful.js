import React, { Component } from 'react';
import './Useful.css';

class Useful extends Component {
  render() {
    return (
      <div>
        <PageButton name={{text: 'Useful'}}/>
      </div>
    );
  }
}
const PageButton = ({name}) => <div className='tab'>{name.text}</div>
export default Useful;