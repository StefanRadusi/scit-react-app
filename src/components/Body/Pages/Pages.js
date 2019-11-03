import React from 'react';
const Message = props => <div>{props.msg}</div>;

class Pages extends Component {
  render() {
    return (
      <div>
        <Message msg="A Generic Hello World Text" />
        <Message msg="Creating Reusable React Components" />
      </div>
    );
  }
}

export default Pages;