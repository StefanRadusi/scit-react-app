import React ,{Component} from 'react';

class Useful extends Component {
  render() {
    return (
      <div>
      <PageButton name={{ text: 'Useful' }} />
      </div>
    );
  }
}
const PageButton = ({ name }) => <div className='hover'>{name.text}</div>;
export default Useful;