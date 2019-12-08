import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  state = {
    open: false
  };
  render() {
    let something = this.state.open === true ? "open" : "closed";
    return (
      <div className="header">
        <NavLink className="header-logo" exact to="/">
          LOGO
        </NavLink>
        <div
          className="header__dropdown-icon"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          <div className="header__dropdown-icon-bar1"></div>
          <div className="header__dropdown-icon-bar2"></div>
          <div className="header__dropdown-icon-bar3"></div>
        </div>
        <div
          className="header__dropdown"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          <NavLink className="header__dropdown-title" to="/">
            Categories
          </NavLink>
          <div className={`header__dropdown-content ${something}`}>
            <NavLink className="header__dropdown-link" exact to="/">
              Automotive
            </NavLink>
            <NavLink className="header__dropdown-link" exact to="/">
              Electronics
            </NavLink>
            <NavLink className="header__dropdown-link" exact to="/">
              Health
            </NavLink>
            <NavLink className="header__dropdown-link" exact to="/">
              Automotive
            </NavLink>
            <NavLink className="header__dropdown-link" exact to="/">
              Electronics
            </NavLink>
            <NavLink className="header__dropdown-link" exact to="/">
              Health
            </NavLink>
            <NavLink className="header__dropdown-link" exact to="/">
              Automotive
            </NavLink>
            <NavLink className="header__dropdown-link" exact to="/">
              Electronics
            </NavLink>
            <NavLink className="header__dropdown-link" exact to="/">
              Health
            </NavLink>
            <NavLink className="header__dropdown-link" exact to="/">
              Automotive
            </NavLink>
            <NavLink className="header__dropdown-link" exact to="/">
              Electronics
            </NavLink>
            <NavLink className="header__dropdown-link" exact to="/">
              Health
            </NavLink>
          </div>
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
