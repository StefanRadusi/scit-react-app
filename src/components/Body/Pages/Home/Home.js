import React ,{Component} from 'react';


class Home extends Component {
  render() {
    return (
      <div>
      <PageButton name={{ text: 'Home' }} />

      </div>
    );
  }
}
const PageButton = ({ name }) => <div className='hover'>{name.text}</div>;
export default Home;