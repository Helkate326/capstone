import React, { Component } from "react";
import Header from "../components/Header.js";
import Sidebar from "./Sidebar";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Sidebar open={this.props.open} click={this.props.click} />
        <Header open={this.props.open} click={this.props.click} />
      </div>
    );
  }
}
