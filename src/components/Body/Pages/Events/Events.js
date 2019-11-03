import React ,{Component} from 'react';
import '../Events/Events.css';
class Events extends Component {
  render() {
    return (
      <div>
      <PageButton name={{ text: 'Events' }} />
      </div>
    );
  }
}
const PageButton = ({ name }) => <div className='hover'>{name.text}</div>;
export default Events;