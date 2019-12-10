import React, { Component } from "react";

export default class Desktops extends Component {
  render() {
    return (
      <div className="desktop" id="desktop">
        <div className="desktop__flex">
          <div className="destop__flex-left">
            <div className="desktop__container"></div>
            <div className="desktop__container-bottom">
              <h2 className="desktop__container-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Varius quam quisque id diam. Netus et malesuada fames ac turpis.
                Faucibus ornare suspendisse sed nisi lacus sed.
              </h2>
            </div>
          </div>
          <div className="desktop__flex-right">
            <div className="desktop__right-container">
              <h3 className="desktop__right-text">stuff</h3>
            </div>
            <div className="desktop__right-container">
              <h3 className="desktop__right-text">stuff</h3>
            </div>
            <div className="desktop__right-container">
              <h3 className="desktop__right-text">stuff</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
