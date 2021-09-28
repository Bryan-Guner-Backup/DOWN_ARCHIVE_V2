import React from 'react';
import FormButton from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default () => (
  <>
  {/*** To inject props into the component, add props={propSource} to each CardContainer below} ***/}
    <IsMobile>
      <FormButton props styles={mobileStyles} />
    </IsMobile>

    <IsTablet>
      <FormButton styles={tabletStyles} />
    </IsTablet>

    <IsDesktop>
      <FormButton styles={desktopStyles} />
    </IsDesktop>
  </>
);
