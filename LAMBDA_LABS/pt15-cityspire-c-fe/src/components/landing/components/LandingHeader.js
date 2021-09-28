import React from 'react';
import { Button } from 'antd';
import '../../../antD/styles/landingHeader.css';

const LandingHeader = () => {
  return (
    <div className="header-footer">
      <div className="map-header">
        <div className="left-header-section">
          <h1>Cityspire</h1>
        </div>
        <div className="header-section">
          <p>Use data to find a place right for you to live.</p>
        </div>
        <div className="right-header-section">
          <Button type="text" className="login-button" href="/login">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
