import React from 'react';
import Button from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default () => (
  <>
  {/*** To inject props into the component, add props={propSource} to each component below} ***/}
    <IsMobile>
      <Button props styles={mobileStyles} />
    </IsMobile>

    <IsTablet>
      <Button props styles={tabletStyles} />
    </IsTablet>

    <IsDesktop>
      <Button props styles={desktopStyles} />
    </IsDesktop>
  </>
);
