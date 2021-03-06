import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/HRF white-01.png';
import lambdaLogo from '../../assets/LambdaAssets/Built by lambda.png';

// import { useOktaAuth } from '@okta/okta-react';
import { Layout, Menu, Sider } from 'antd';

import './nav.css';

const NavBar = () => {
  const [navState, setNavState] = useState(false);

  let handleClick = () => {
    setNavState(!navState);
  };

  const logout = () => {
    localStorage.removeItem('okta-token-storage', 'okta-cache-storage');
    window.location.reload();
  };

  return (
    <nav className="NavbarItems">
      <img className="hrf-logo" alt="hrf-logo" src={logo}></img>
      <div className="menu-icon" onClick={handleClick}>
        <i className={navState ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={navState ? 'nav-menu active' : 'nav-menu'}>
        <NavLink onClick={handleClick} className="nav-link" exact to="/">
          Home
        </NavLink>
        {localStorage.getItem('okta-token-storage') ? (
          <>
            <NavLink
              onClick={handleClick}
              className="nav-link"
              to="/admin-dashboard"
            >
              Admin
            </NavLink>
          </>
        ) : null}
        <NavLink onClick={handleClick} className="nav-link" to="/incidents">
          Incidents
        </NavLink>
        <NavLink onClick={handleClick} className="nav-link" to="/graph">
          Graphs
        </NavLink>
        <NavLink onClick={handleClick} className="nav-link" to="/about">
          About
        </NavLink>
        {localStorage.getItem('okta-token-storage') ? (
          <>
            <NavLink onClick={logout} className="nav-link" exact to="/">
              Logout
            </NavLink>
          </>
        ) : null}
        <img className="lambda-logo" src={lambdaLogo} alt="lambda-logo" />
      </ul>
    </nav>
  );
};
export default NavBar;
