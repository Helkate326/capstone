import React, { Component } from "react";
import wishlist from "../assets/images/wishlist.svg";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        img: {
          position: "relative",
          transition: "all 2s",
          transitiontimingfunction: "ease-out, linear 2s",
          width: "40%",
          opacity: 0
        },
        title: {
          transition: "all 2s",
          transitiontimingfunction: "ease-out, linear 2s",
          opacity: 0
        },
        subtitle: {
          transition: "all 2s",
          transitiontimingfunction: "ease-out, linear 2s",
          opacity: 0
        },
        button: {
          transition: "all 2s",
          transitiontimingfunction: "ease-out, linear 2s",
          opacity: 0
        }
      }
    };
  }
  mountStyle = () => {
    // css for mount animation
    this.setState({
      style: {
        img: {
          transition: "all 2s",
          transitiontimingfunction: "ease-out, linear 2s",
          width: "40%",
          opacity: 1,
          transform: "translateX(600px)"
        },
        title: {
          //   transition: "all 2s",
          transitiontimingfunction: "ease-out, linear 2s",
          transform: "translateY(50px)",
          opacity: 1
        },
        subtitle: {
          //   transition: "all 2s",
          transitiontimingfunction: "ease-out, linear 2s",
          transform: "translateY(50px)",
          opacity: 1
        },
        button: {
          //   transition: "all 2s",
          transitiontimingfunction: "ease-out, linear 2s",
          transform: "translateY(50px)",
          opacity: 1
        }
      }
    });
  };
  componentDidMount() {
    setTimeout(this.mountStyle, 2); // call the into animation
  }
  render() {
    // let something = this.props.notLoaded === true ? "not-loaded" : "loaded";

    return (
      <div className="hero">
        <div className="hero__container">
          <div className="hero__container-contain">
            <h2
              className="hero__container-title"
              style={this.state.style.title}
            >
              The Best Products
            </h2>
            <h2
              className="hero__container-subtitle"
              style={this.state.style.subtitle}
            >
              Not Really.
            </h2>
            <a
              href="#categories"
              className="hero__container-button"
              style={this.state.style.button}
            >
              Categories
            </a>
          </div>
          <img
            className="hero__container-img"
            src={wishlist}
            style={this.state.style.img}
          ></img>
        </div>
      </div>
    );
  }
}
