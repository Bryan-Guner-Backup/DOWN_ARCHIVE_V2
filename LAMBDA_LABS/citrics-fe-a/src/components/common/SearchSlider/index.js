import React from 'react';
import SearchSlider from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default () => (
  <>
  {/*** To inject props into the component, add props={propSource} to each component below} ***/}
    <IsMobile>
      <SearchSlider styles={mobileStyles} />
    </IsMobile>

    <IsTablet>
      <SearchSlider styles={tabletStyles} />
    </IsTablet>

    <IsDesktop>
      <SearchSlider styles={desktopStyles} />
    </IsDesktop>
  </>
);
