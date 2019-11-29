import React, { Component } from "react";
import Hero1 from "../assets/images/hero1.jpg";
import Hero2 from "../assets/images/hero2.jpg";
import Hero3 from "../assets/images/hero3.jpg";
import Hero4 from "../assets/images/hero4.jpg";
import Carousel from "react-bootstrap/Carousel";
import Header from "../components/Header.js";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src={Hero4}
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src={Hero2}
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src={Hero3}
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
