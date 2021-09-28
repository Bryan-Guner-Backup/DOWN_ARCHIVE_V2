import React from 'react';
import { Calculator } from '../mobile/Calculator.js';
import '../../styles/desktop/Desktop-View.scss';
import { LoginRegister } from '../desktop/Desktop-Login-Register.js';

export const DesktopView = () => {
  return (
    <div className='desktopView'>
      <div className='leftContainer'>
        <div className='calc-banner2'>Energy Calculator</div>
        <div className='calcContainer'>
          <Calculator />
        </div>
      </div>
      <div className='rightContainer'>
        <div className='registerContainer'>
          <LoginRegister />
        </div>
      </div>
    </div>
  );
};
