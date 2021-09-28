import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/Logo.svg";
const Navigation = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div
      id="navbar"
      className="navbar navbar-expand-md navbar-light bg-light sticky-top"
    >
      <div>
        <NavLink to="/" className="navbar-brand">
          <Logo className="logo" />
        </NavLink>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <nav
        className="collapse navbar-collapse align-items-end flex-column "
        id="navbarColor03"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/"
              id="home"
              className="nav-link d-flex justify-content-center"
            >
              <h5>Home</h5>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              id="about"
              className="nav-link d-flex justify-content-center  ml-xl-5 ml-lg-5 ml-md-4  ml-sm-0 "
            >
              <h5>About Us</h5>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/signin"
              id="signIn"
              className="nav-link d-flex justify-content-center ml-xl-5 ml-lg-5  ml-md-3  ml-sm-0 "
            >
              <h5>Sign In</h5>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/onboarding"
              id="onboarding"
              className="nav-link d-flex justify-content-center ml-xl-5 ml-lg-5 ml-md-3 mr-xl-4 mr-lg-4 mr-md-3 ml-sm-0 mr-sm-0  "
            >
              <h5>Sign Up</h5>
            </NavLink>
          </li>
          {isAuthenticated && (
            <li className="nav-item">
              {" "}
              <NavLink
                to="/dashboard"
                id="profileLink"
                className="nav-link d-flex justify-content-center ml-lg-4 mr-xl-4 mr-lg-3 mr-md-3 ml-sm-0 mr-sm-0  "
              >
                <h5>
                  <i className="fas fa-user"></i>
                </h5>
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
