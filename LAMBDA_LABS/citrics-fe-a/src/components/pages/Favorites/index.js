import React from 'react';
import FavoritesPage from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default () => (
  <>
  {/*** To inject props into the component, add props={propSource} to each component below} ***/}
    <IsMobile>
      <FavoritesPage styles={mobileStyles} />
    </IsMobile>

    <IsTablet>
      <FavoritesPage styles={tabletStyles} />
    </IsTablet>

    <IsDesktop>
      <FavoritesPage styles={desktopStyles} />
    </IsDesktop>
  </>
);
