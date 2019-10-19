import React from "react";
import { Header } from "./components/Header/Header.js";
import Body from "./components/Body/Body";

import "./App.css";

//

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: "This is the page 1 body"
    };
  }
  handlePageChange = pagebody => {
    this.setState({ currentPage: pagebody });
  };
  render() {
    return (
      <div className="App">
        <Header changePage={this.handlePageChange} />
        <Body currentPage={this.state.currentPage} />
      </div>
    );
  }
}
