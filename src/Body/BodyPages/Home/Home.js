import React, {Component} from 'react';
import '../../Timer/Timer.css';
import '../../BodyPages/StartTimerBtn.css';
import { Redirect } from 'react-router'

class Home extends Component{
constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
}

handleClick = () => {
    this.setState(state => ({
        isToggleOn: !state.isToggleOn
    }));
}
render() {
    return(

        <div>
            <p>This is the Home Page</p>
           <p id ="startTimerBtn"
            onClick={this.handleClick}>
            Start Timer</p>
            {this.state.isToggleOn ? <Redirect to="/timer" />
 : null }
         

        </div>
    );
}
}

export default Home;