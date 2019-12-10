import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  state = {
    open: false
  };
  render() {
    let something = this.state.open === true ? "open" : "closed";
    return (
      <div className="header" id="home">
        <NavLink className="header-logo" exact to="/">
          LOGO
        </NavLink>

        <div
          className="header__dropdown"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          <a className="header__dropdown-title" href="#categories">
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
    );
  }
}
