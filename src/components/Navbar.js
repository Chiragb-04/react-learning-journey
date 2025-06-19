import React, { Component } from "react";
import { NavLink, useLocation } from "react-router-dom";

export class NavBar extends Component {
  render() {
    const { location } = this.props;
    const isNewsRoute = location.pathname.startsWith("/news");

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              NavBar
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" exact="true" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/textform">
                    TextForm
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/todolist">
                    TodoList
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/news">
                    NewsMonkey
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/userData">
                    UserDetails
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Sub-navbar for NewsMonkey categories  */}
        {isNewsRoute && (
          <div className="bg-secondary">
            <div className="container">
              <ul className="nav justify-content-center py-2">
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/news/business">
                    Business
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white"
                    to="/news/entertainment"
                  >
                    Entertainment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/news/general">
                    General
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/news/health">
                    Health
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/news/science">
                    Science
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/news/sports">
                    Sports
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white"
                    to="/news/technology"
                  >
                    Technology
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

// Custom wrapper to inject `location` into class component
export default function NavBarWithRouterProps() {
  const location = useLocation();
  return <NavBar location={location} />;
}
