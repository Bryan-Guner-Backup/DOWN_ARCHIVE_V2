import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        exact
        activeClassName="navbar_link--active"
        className="navbar_link"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        activeClassName="navbar_link--active"
        className="navbar_link"
        to="/Features"
      >
        Features
      </NavLink>
      <NavLink
        activeClassName="navbar_link--active"
        className="navbar_link"
        to="/View-Plans"
      >
        View Plans
      </NavLink>
    </nav>
  );
};

export default Navbar;
