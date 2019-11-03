import React ,{Component} from 'react';


class Contact extends Component {
  render() {
    return (
      <div>
      <PageButton name={{ text: 'Contact' }} />
      </div>
    );
  }
}
const PageButton = ({ name }) => <div className='hover'>{name.text}</div>
export default Contact;