import React, { Component } from 'react';
import "./StartTimerBtn/StartTimerBtn";
import { StartTimerBtn } from './StartTimerBtn/StartTimerBtn';
import { DisplayNumber } from './DisplayNumber/DisplayNumber';
import './Timer.css'


class Timer extends Component {
    constructor() {
        super()
        this.state = {
            second1: 0,
            second2: 0,
            minute1: 0,
            minute2: 0
        }
    }

    startTimer = () => {
        setInterval(() => {
            let second1 = this.state.second1 + 1;
            let second2 = this.state.second2;
            let minute1 = this.state.minute1;
            let minute2 = this.state.minute2

            if (second1 === 9) {
                second1 = 0;
                second2 += 1;
            }

            if (second2 === 6) {
                second2 = 0;
                minute1 += 1;
            }
            if (minute1 === 9) {
                minute1 = 0;
                minute2 += 1;
            }

            if (minute2 === 9) {
                minute1 = 0;
                minute2 += 1
            }
            if (minute2 === 6)
                minute2 = 0;

            this.setState({ second1, second2, minute1, minute2 })
        }, 1000)

    }


    render() {
        return (
            <div className ='timerContainer'>
                <DisplayNumber 
                    displaySecond1={this.state.second1}
                    displaySecond2={this.state.second2}
                    displayMinute1={this.state.minute1}
                    displayMinute2={this.state.minute2}
                />
                <StartTimerBtn startTimer={this.startTimer} />

            </div>
        )
    }
}

export default Timer;