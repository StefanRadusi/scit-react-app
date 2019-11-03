import React, { Component } from "react";
import { DisplayNumber } from "./DisplayNumber/DisplayNumber";
import { StartTimerButton } from "./StartTimerButton/StartTimerButton";

class Timer extends Component {
  state = {
    m1: 0,
    m2: 0,
    s1: 0,
    s2: 0
  };

  startTimer = () => {
    if (this.refs.myInput !==null) {
      var input = this.refs.myInput;
      var val = input.value;
      if (val[0] <= 6) && (val[2] === ':') && (typeof(val[0]) ='number') && (typeof(val[1]) !='number') && (typeof(val[3]) !='number') && (typeof(val[4]) !='number') && (val.length == 5) && (val[3] <=6)) {
        let m1 = val[0];
        let m2= val[1];
        let s1= val[3];
        let s2=val[4];
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

  render() {
    return (
      <div className="timer">
        <DisplayNumber text={this.state.m1} />
        <DisplayNumber text={this.state.m2} />
        :
        <DisplayNumber text={this.state.s1} />
        <DisplayNumber text={this.state.s2} />
        <StartTimerButton onClick={this.startTimer} />
        <input type="text" ref="myInput" />
      </div>
    );
  }
}

export default Timer;
