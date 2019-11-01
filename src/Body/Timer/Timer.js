import React, { Component } from 'react';
import "./StartTimerBtn/StartTimerBtn";
import { StartTimerBtn } from './StartTimerBtn/StartTimerBtn';
import { DisplayNumber } from './DisplayNumber/DisplayNumber';
import '../Timer/Timer.css';


class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            second1: 0,
            second2: 0,
            minute1: 0,
            minute2: 0
        }
    }

    startTimer = () => {
        setInterval(() => {
            let second1 = this.state.second1 ;
            let second2 = this.state.second2+1 ;
            let minute1 = this.state.minute1;
            let minute2 = this.state.minute2

            if (second2 === 9) {
                second2 = 0;
                second1 += 1;
            }

            if (second1 === 6) {
                second1 = 0;
                minute2 += 1;
            }
            if (minute2 === 9) {
                minute2 = 0;
                minute1 += 1;
            }

            if (minute1 === 6) {
                minute2 = 0;
                minute1 += 1
            }
            if (minute1 === 6)
                minute1 = 0;

            this.setState({ second1, second2, minute1, minute2 })
        }, 1000)

    }


    render() {


        return (
            <div className='timerContainer'>
                
                <DisplayNumber displayNumber={this.state.minute1} />
                <DisplayNumber displayNumber={this.state.minute2} />

                <p>:</p>
                <DisplayNumber displayNumber={this.state.second1} />
                <DisplayNumber displayNumber={this.state.second2} />

                <button id="goBackBtn">Back</button >
                <StartTimerBtn startTimer={this.startTimer} />
            
            </div>
        )
    }
}

export default Timer;