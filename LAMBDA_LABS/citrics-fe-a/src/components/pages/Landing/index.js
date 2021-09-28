import React from 'react';
import LandingPage from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default () => (
  <>
  {/*** To inject props into the component, add props={propSource} to each component below} ***/}
    <IsMobile>
      <LandingPage styles={mobileStyles} />
    </IsMobile>

    <IsTablet>
      <LandingPage styles={tabletStyles} />
    </IsTablet>

    <IsDesktop>
      <LandingPage styles={desktopStyles} />
    </IsDesktop>
  </>
);
