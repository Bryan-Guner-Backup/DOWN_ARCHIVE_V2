import React from 'react';
import SearchBar from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default newProps => (
  <>
  {/*** To inject props into the component, add props={propSource} to each component below} ***/}
    <IsMobile>
      <SearchBar styles={mobileStyles} newProps={newProps} />
    </IsMobile>

    <IsTablet>
      <SearchBar styles={tabletStyles} newProps={newProps} />
    </IsTablet>

    <IsDesktop>
      <SearchBar styles={desktopStyles} newProps={newProps} />
    </IsDesktop>
  </>
);
