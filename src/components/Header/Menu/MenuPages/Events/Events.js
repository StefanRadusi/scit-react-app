import React, { Component } from 'react';
import './Events.css';

class Events extends Component {
  render() {
    return (
      <div>
        <PageButton name={{text: 'Events'}}/>
      </div>
    );
  }
}
const PageButton = ({name}) => <div className='tab'>{name.text}</div>
export default Events;