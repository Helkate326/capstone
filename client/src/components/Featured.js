import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import feature1 from "../assets/images/feature1.jpg";
import feature2 from "../assets/images/feature2.png";

export default class Featured extends Component {
  render() {
    return (
      <div className="feature" id="feature">
        <h2 className="feature-title">Featured</h2>

        <div className="feature__container">
          <NavLink to="/" className="feature__card">
            <img src={feature2} className="feature__card-img one"></img>
            <h3 className="feature__card-title">Top 10 Business Laptops</h3>
          </NavLink>
          <NavLink to="/" className="feature__card">
            <img src={feature2} className="feature__card-img two"></img>
            <h3 className="feature__card-title">Top 10 Business Laptops</h3>
          </NavLink>
          <NavLink to="/" className="feature__card">
            <img src={feature2} className="feature__card-img three"></img>
            <h3 className="feature__card-title">Top 10 Business Laptops</h3>
          </NavLink>
        </div>
        <div className="feature__container">
          <NavLink to="/" className="feature__card">
            <img src={feature2} className="feature__card-img one"></img>
            <h3 className="feature__card-title">Top 10 Business Laptops</h3>
          </NavLink>
          <NavLink to="/" className="feature__card">
            <img src={feature2} className="feature__card-img two"></img>
            <h3 className="feature__card-title">Top 10 Business Laptops</h3>
          </NavLink>
          <NavLink to="/" className="feature__card">
            <img src={feature2} className="feature__card-img three"></img>
            <h3 className="feature__card-title">Top 10 Business Laptops</h3>
          </NavLink>
        </div>
      </div>
    );
  }
}
