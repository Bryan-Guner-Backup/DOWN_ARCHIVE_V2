import React from 'react';

import logic from './logic.js';
import logo from '../../../assets/citricsIcon.svg';
import heroImage from './heroImage.png';
import LandingPageDiv from './style';
import { LandingHeader } from '../../common/LandingHeader';

logic();

export default function LandingPage() {
  return (
    <LandingPageDiv style={{ backgroundImage: `url(${heroImage})` }}>
      <LandingHeader />
      <div className="landing-page-logo">
        <img
          src={logo}
          alt="Citrics Logo"
          className="landing-page-logo-icon"
        ></img>
        <h1 className="landing-page-logo-h1">CITRICS</h1>
        <p className="landing-page-logo-p">A NOMAD'S GUIDE TO THE CITY </p>
      </div>
    </LandingPageDiv>
  );
}
