import React from 'react';
import Firefly from '../../assets/Firefly.svg';

const StoreSidebar = () => {

  return (
    <aside className='sidebar'>
      <div className='game'>
        {/* Image for project firefly, clicking on it should redirect you to the game page, which is the only store item at the moment */}
        <h2 className='characters-header'>Characters</h2>
        <div className='character'>
          <img src={Firefly} alt='Firefly' />
          <span className='character-name'>Timmy</span>
        </div>
        <div className='character'>
          <img src={Firefly} alt='Firefly' />
          <span className='character-name'>John</span>
        </div>
        <div className='character'>
          <img src={Firefly} alt='Firefly' />
          <span className='character-name'>Linda</span>
        </div>
      </div>
    </aside>
  );
};

export default StoreSidebar;