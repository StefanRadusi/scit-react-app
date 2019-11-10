import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div>
        <PageButton name={{text: 'Contact'}}/>
      </div>
    );
  }
}
const PageButton = ({name}) => <div className='tab'>{name.text}</div>
export default Contact;