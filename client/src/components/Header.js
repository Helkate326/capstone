import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import icon from "../assets/icons/search.svg";

export default class Header extends Component {
  state = {
    open: false
  };
  render() {
    let something = this.state.open === true ? "cat-open" : "cat-closed";
    return (
      <div className="header-container">
        <div className="header" id="home">
          <NavLink className="header-logo" exact to="/">
            LOGO
          </NavLink>

          <div
            className="header__dropdown"
            onClick={() => this.setState({ open: !this.state.open })}
          >
            <a className="header__dropdown-title" On>
              Categories
            </a>
          </div>
          <input
            className="header-search"
            placeholder="Products and Reviews"
          ></input>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">Contact</li>
              <li className="header__nav-item">Help</li>
            </ul>
          </nav>
        </div>

        <div className={`categories ${something}`}>
          <div className={`categories__container ${something}`}>
            <a className={`categories__card ${something}`} href="#desktop">
              <img src={icon} className="categories__card-img"></img>
              <h3 className="categories__card-title">Desktops</h3>
            </a>
            <a className={`categories__card ${something}`} href="#desktop">
              <img src={icon} className="categories__card-img"></img>
              <h3 className="categories__card-title">Laptops</h3>
            </a>
            <a className={`categories__card ${something}`} href="#desktop">
              <img src={icon} className="categories__card-img"></img>
              <h3 className="categories__card-title">Components</h3>
            </a>
            <a className={`categories__card ${something}`} href="#desktop">
              <img src={icon} className="categories__card-img"></img>
              <h3 className="categories__card-title">Consoles</h3>
            </a>
            <a className={`categories__card ${something}`} href="#desktop">
              <img src={icon} className="categories__card-img"></img>
              <h3 className="categories__card-title">Home Automation</h3>
            </a>
            <a className={`categories__card ${something}`} href="#desktop">
              <img src={icon} className="categories__card-img"></img>
              <h3 className="categories__card-title">Accessories</h3>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
