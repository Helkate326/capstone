import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    let something = this.props.open === true ? "open" : "closed";

    return (
      <div className="sidebar">
        <div className={`sidebar-background ${something}`}></div>
        <div
          className={`sidebar__button-open ${something}`}
          onClick={() => this.props.click()}
        >
          <div className="sidebar__icon-bar1"></div>
          <div className="sidebar__icon-bar2"></div>
          <div className="sidebar__icon-bar3"></div>
        </div>

        <div className={`sidebar__content ${something}`}>
          <div className="sidebar"></div>
          <div
            className="sidebar__button-close"
            onClick={() => this.props.click()}
          >
            <div className={`sidebar__button-close-bar1 ${something}`}></div>
            <div className={`sidebar__button-close-bar2 ${something}`}></div>
            <div className={`sidebar__button-close-bar3 ${something}`}></div>
          </div>
          <a
            onClick={() => this.props.click()}
            className="sidebar__content-link"
            href="#home"
          >
            Home
          </a>
          <a
            onClick={() => this.props.click()}
            className="sidebar__content-link"
            href="#categories"
          >
            Categories
          </a>
          <a
            onClick={() => this.props.click()}
            className="sidebar__content-link"
            href="#feature"
          >
            Featured
          </a>
          <a
            onClick={() => this.props.click()}
            className="sidebar__content-link"
            href="#home"
          >
            Contact
          </a>
        </div>
      </div>
    );
  }
}
