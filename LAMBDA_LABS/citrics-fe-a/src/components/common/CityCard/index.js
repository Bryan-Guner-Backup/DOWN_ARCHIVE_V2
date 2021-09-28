import React from 'react';
import CityCard from './Component';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default ({ city }) => (
  <>
  {/*** To inject props into the component, add props={propSource} to each component below} ***/}
    <IsMobile>
      <CityCard city={city} display={'mobile'} />
    </IsMobile>

    <IsTablet>
      <CityCard city={city} display={'tablet'} />
    </IsTablet>

    <IsDesktop>
      <CityCard city={city} display={'desktop'} />
    </IsDesktop>
  </>
);
