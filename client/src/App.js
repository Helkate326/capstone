import React, { Component } from "react";
import Home from "./components/Home";

export default class App extends Component {
  state = {
    open: false
  };
  onClick = () => {
    this.setState({
      open: !this.state.open
    });
  };
  render() {
    let something = this.state.open === true ? "open" : "closed";

    return (
      <div className={`App ${something}`}>
        <Home open={this.state.open} click={this.onClick} />
      </div>
    );
  }
}
