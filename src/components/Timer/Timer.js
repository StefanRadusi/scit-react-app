import React, { Component } from "react";
import { DisplayNumber } from "./DisplayNumber/DisplayNumber";
import { StartTimerButton } from "./StartTimerButton/StartTimerButton";
import { StopTimerButton } from "./StopTimerButton/StopTimerButton";

class Timer extends Component {
  state = {
    m1: 0,
    m2: 0,
    s1: 0,
    s2: 0
  };

  startTimer = () => {
    console.log(StartTimerButton);
    if (this.refs.myInput !== null) {
      var input = this.refs.myInput;
      var val = input.value;
      if (
        val[0] <= 6 &&
        val[0] >= 0 &&
        val[2] === ":" &&
        val[1] <= 9 &&
        val[1] >= 0 &&
        val[3] <= 6 &&
        val[3] >= 0 &&
        val[4] <= 9 &&
        val[4] >= 0 &&
        val.length === 5
      ) {
        let m1 = Number(val[0]);
        let m2 = Number(val[1]);
        let s1 = Number(val[3]);
        let s2 = Number(val[4]);
        this.setState({ s1, s2, m1, m2 });
      }
    }
    setInterval(() => {
      let s2 = this.state.s2 + 1;
      let s1 = this.state.s1;
      let m1 = this.state.m1;
      let m2 = this.state.m2;
      if (s2 > 9) {
        s2 = 0;
        s1 = s1 + 1;
      }

      if (s1 >= 6) {
        s1 = 0;
        m2 = m2 + 1;
      }

      if (m2 > 9) {
        m2 = 0;
        m1 = m1 + 1;
      }

      if (m1 >= 6) {
        m1 = 0;
      }

      this.setState({ m1, m2, s1, s2 });
    }, 1000);
  };

  StopTimer = () => {
    console.log("tada");
    clearInterval(this.setInterval);
  };

  render() {
    return (
      <div className="timer">
        <DisplayNumber text={this.state.m1} />
        <DisplayNumber text={this.state.m2} />
        :
        <DisplayNumber text={this.state.s1} />
        <DisplayNumber text={this.state.s2} />
        <StartTimerButton onClick={this.startTimer} />
        <StopTimerButton onClick={this.stopTimer} />
        <input type="text" ref="myInput" />
      </div>
    );
  }
}

export default Timer;
