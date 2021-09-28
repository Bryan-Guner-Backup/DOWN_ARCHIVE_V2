import React from 'react';
import '../../styles/mobile/Appliance-Tracker.scss';
export const ApplianceTracker = () => {
  return (
    <div className='applianceTracker'>
      <div className='left'>
        <button className='leftButton'>Appliance List</button>
      </div>
      <div className='right'>
        <button className='rightButton'> Track Usage</button>
      </div>
    </div>
  );
};
