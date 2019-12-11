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
                Powerful, lag-free gaming is easily experienced with the Acer
                Nitro gaming PC. This compact design boasts a 2.9GHz Intel Core
                i5-9400F processor with 8GB RAM, and large 1TB HDD for storing
                all your digital files. The NVIDIA GeForce GTX 1050 graphics
                card with 2GB of dedicated memory offers smooth gaming and
                graphic-intensive tasking.
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
