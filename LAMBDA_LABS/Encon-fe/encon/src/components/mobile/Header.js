import React from "react";
import "../../styles/mobile/Header.scss";

export const Header = () => {
  return (
    <div className="header-container">
      <h1 className="main-header">Welcome to EnCon!</h1>
      <p className="main-title">
        Track your energy usage <br></br>
        and spending
      </p>
    </div>
  );
};
