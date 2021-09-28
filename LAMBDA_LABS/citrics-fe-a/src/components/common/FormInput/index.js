import React from 'react';
import FormInput from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default () => (
  <>
  {/*** To inject props into the component, add props={propSource} to each component below} ***/}
    <IsMobile>
      <FormInput props styles={mobileStyles} />
    </IsMobile>

    <IsTablet>
      <FormInput styles={tabletStyles} />
    </IsTablet>

    <IsDesktop>
      <FormInput styles={desktopStyles} />
    </IsDesktop>
  </>
);
