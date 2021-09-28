import React from 'react';
import './NavBar.css';
import HrfLogo from './assets/hrf-logo.png';

const NavBar = () => {
  return (
    <div className="logo-pane">
      <div className="company-info">
        <img src={HrfLogo} alt="Human Rights First logo" />
      </div>
      {/* <div className="user-nav">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div> */}
    </div>
  );
};
export default NavBar;
