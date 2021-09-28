import React from 'react';
import SliderPanel from './Component';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default ({ Components }) => (
  <>
    <IsMobile>
      <SliderPanel Components={Components} display={'mobile'} />
    </IsMobile>

    <IsTablet>
      <SliderPanel Components={Components} display={'tablet'} />
    </IsTablet>

    <IsDesktop>
      <SliderPanel Components={Components} display={'desktop'} />
    </IsDesktop>
  </>
);
