import React, { Component } from "react";
import DisplayNumber from "./DisplayNumber/DisplayNumber";
import StartTimerButton from "./StartTimerButton/StartTimerButton";
import InputTime from "./Input";

class Timer extends Component {
  state = {
    second1: 0,
    second2: 0,
    minute1: 0,
    minute2: 0,
    inputText: ""
  };

  storeInputText = event => {
    // console.log(event.currentTarget.value);
    let userInput = event.currentTarget.value;
    let userInputSplit = userInput.split(":");
    // console.log(userInputSplit);
    let num1 = parseInt(userInputSplit[0]);
    let num2 = parseInt(userInputSplit[1]);
    console.log(num1, num2);

    if (!isNaN(num1 && num2)) {
      console.log("is a numbber");
      this.setState({
        minute2: num1,

        second1: num2
      });
    } else {
      console.log("is a string");
    }
    // this.setState({ inputText: num1, num2 });
  };

  startTimer = () => {
    // console.log("start");

    setInterval(() => {
      let second1 = this.state.second1 + 1;
      let second2 = this.state.second2;
      let minute1 = this.state.minute1;
      let minute2 = this.state.minute2;

      if (second1 === 9) {
        second1 = 0;
        second2 = second2 + 1;
      }

      if (second2 === 6) {
        second2 = 0;
        minute1 = minute1 + 1;
      }
      if (minute1 === 9) {
        minute1 = 0;
        minute2 = minute2 + 1;
      }
      if (minute2 === 6) {
      }
      this.setState({ second1, second2, minute1, minute2 });
    }, 1000);
  };

  render() {
    return (
      <div>
        <DisplayNumber text={this.state.minute2} />
        <DisplayNumber text={this.state.minute1} />:
        <DisplayNumber text={this.state.second2} />
        <DisplayNumber text={this.state.second1} />
        <StartTimerButton startTimer={this.startTimer} />
        <InputTime storeInputText={this.storeInputText} />
      </div>
    );
  }
}

export default Timer;
