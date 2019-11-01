import React, { Component } from 'react';
import '../../Timer/Timer.css';
import '../../BodyPages/StartTimerBtn.css';
import Timer from '../../Timer/Timer';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isToggleOn: false };
    }

    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (

            <div className="pageContent">
                <p id = "text">This is the Home Page</p>
                <button id = "startTimerBtn"
                onClick={this.handleClick}>Go to Timer</button>
                {this.state.isToggleOn ? 
                <Timer /> : null}


            </div>
        );
    }
}

export default Home;