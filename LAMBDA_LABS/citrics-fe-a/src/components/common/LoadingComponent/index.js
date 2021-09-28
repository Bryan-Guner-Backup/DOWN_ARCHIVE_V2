import React from 'react';
import LoadingComponent from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default () => (
  <>
  {/*** To inject props into the component, add props={propSource} to each component below} ***/}
    <IsMobile>
      <LoadingComponent props styles={mobileStyles} />
    </IsMobile>

    <IsTablet>
      <LoadingComponent styles={tabletStyles} />
    </IsTablet>

    <IsDesktop>
      <LoadingComponent styles={desktopStyles} />
    </IsDesktop>
  </>
);
