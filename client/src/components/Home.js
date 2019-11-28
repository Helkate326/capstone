import React, { Component } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import Hero1 from "../assets/images/hero1.jpg";
import Hero2 from "../assets/images/hero2.jpg";
import Hero3 from "../assets/images/hero3.jpg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel slidesPerPage={2} arrows infinite>
          <img src={Hero1} />
          <img src={Hero2} />
          <img src={Hero3} />
        </Carousel>
      </div>
    );
  }
}
