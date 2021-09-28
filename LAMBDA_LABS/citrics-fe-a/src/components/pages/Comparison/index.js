import React from 'react';
import ComparisonPage from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default () => (
  <>
  {/*** To inject props into the component, add props={propSource} to each component below} ***/}
    <IsMobile>
      <ComparisonPage styles={mobileStyles} />
    </IsMobile>

    <IsTablet>
      <ComparisonPage styles={tabletStyles} />
    </IsTablet>

    <IsDesktop>
      <ComparisonPage styles={desktopStyles} />
    </IsDesktop>
  </>
);
