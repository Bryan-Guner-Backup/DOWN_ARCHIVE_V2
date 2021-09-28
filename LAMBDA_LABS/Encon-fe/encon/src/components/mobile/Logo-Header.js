import React from "react";
import "../../styles/mobile/Logo-Header.scss";
import logo from "../../assets/EnCon-logo.png";

export const LogoHeader = () => {
  return (
    <div className="logo-header-container">
      <div className="logo-header-main"></div>
      <div className="logo-container-main">
        <a href="/">
          <img className="encon-logo-main" src={logo} alt="Logo" />
        </a>
      </div>
    </div>
  );
};
