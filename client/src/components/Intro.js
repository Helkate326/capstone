import React, { Component } from "react";

export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        topleft: {},
        topright: {},
        bottomleft: {},
        bottomright: {},
        button: {},
        content: {},
        intro: {}
      }
    };
  }

  onClick = () => {
    this.setState({
      style: {
        intro: {
          transition: "all 2s, ease-out, linear 2s",
          transitionDelay: "3s",
          height: 0
        },
        topleft: {
          borderWidth: "0 0 0 0",
          transition: "all .1s, ease-out, linear 1s"
        },
        bottomright: {
          borderWidth: "0 0 0 0",
          transition: "all .1s, ease-out, linear 1s"
        },
        topright: {
          borderWidth: "0 0 0 0",
          transition: "all .1s, ease-out, linear 1s",
          transitionDelay: ".3s"
        },
        bottomleft: {
          borderWidth: "0 0 0 0",
          transition: "all .1s, ease-out, linear 1s",
          transitionDelay: ".3s"
        },
        button: {
          transition: "all .2s, ease-out, linear .2s",
          opacity: 0
        },
        content: {
          transition: "all .2s, ease-out, linear .2s",
          transitionDelay: "5s",
          opacity: 0
        }
      }
    });
  };

  render() {
    return (
      <div className="intro" style={this.state.style.intro}>
        <div
          className="intro__triangle-topleft"
          style={this.state.style.topleft}
        ></div>
        <div
          className="intro__triangle-bottomright"
          style={this.state.style.bottomright}
        ></div>
        <div
          className="intro__triangle-bottomleft"
          style={this.state.style.bottomleft}
        ></div>
        <div
          className="intro__triangle-topright"
          style={this.state.style.topright}
        ></div>
        <div className="intro__content" style={this.state.style.content}>
          <h1 className="intro__content-title">Online Comerce Site</h1>

          <h2 className="intro__content-subtitle">By Mattias Odegard</h2>
        </div>

        <button
          className="intro-start"
          style={this.state.style.button}
          onClick={() => this.onClick()}
        >
          Start
        </button>
      </div>
    );
  }
}
