import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import icon from "../assets/icons/search.svg";

export default class Categories extends Component {
  render() {
    return (
      <div className="categories">
        <h2 className="categories-title">Categories</h2>
        <div className="categories__container">
          <NavLink className="categories__card" to="/">
            <img src={icon} className="categories__card-img"></img>
            <h3 className="categories__card-title">Automotive</h3>
          </NavLink>
          <NavLink className="categories__card" to="/">
            <img src={icon} className="categories__card-img"></img>
            <h3 className="categories__card-title">Automotive</h3>
          </NavLink>
          <NavLink className="categories__card" to="/">
            <img src={icon} className="categories__card-img"></img>
            <h3 className="categories__card-title">Automotive</h3>
          </NavLink>
          <NavLink className="categories__card" to="/">
            <img src={icon} className="categories__card-img"></img>
            <h3 className="categories__card-title">Automotive</h3>
          </NavLink>
          <NavLink className="categories__card" to="/">
            <img src={icon} className="categories__card-img"></img>
            <h3 className="categories__card-title">Automotive</h3>
          </NavLink>
          <NavLink className="categories__card" to="/">
            <img src={icon} className="categories__card-img"></img>
            <h3 className="categories__card-title">Automotive</h3>
          </NavLink>
          <NavLink className="categories__card" to="/">
            <img src={icon} className="categories__card-img"></img>
            <h3 className="categories__card-title">Automotive</h3>
          </NavLink>
          <NavLink className="categories__card" to="/">
            <img src={icon} className="categories__card-img"></img>
            <h3 className="categories__card-title">Automotive</h3>
          </NavLink>
        </div>
      </div>
    );
  }
}
