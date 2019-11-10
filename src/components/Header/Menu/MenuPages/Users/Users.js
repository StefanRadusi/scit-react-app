import React, { Component } from 'react';
import './Users.css';

class Users extends Component {
  render() {
    return (
      <div>
        <PageButton name={{text: 'Users'}}/>
      </div>
    );
  }
}
const PageButton = ({name}) => <div className='tab'>{name.text}</div>
export default Users;