import React ,{Component} from 'react';



class Users extends Component {
  render() {
    return (
      <div>
      <PageButton name={{ text: 'Users' }} />
      </div>
    );
  }
}
const PageButton = ({ name }) => <div className='hover'>{name.text}</div>;
export default Users;