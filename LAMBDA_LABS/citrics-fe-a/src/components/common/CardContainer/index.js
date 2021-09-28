import React from 'react';
import CardContainer from './Component';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';
import { useLocation } from 'react-router-dom';

export default ({ Card }) =>
  useLocation().pathname != '/' ? (
    <>
    {/*** To inject props into the component, add props={propSource} to each CardContainer below} ***/}
      <IsMobile> 
        <CardContainer Card={Card} display={'mobile'} />
      </IsMobile>

      <IsTablet>
        <CardContainer Card={Card} display={'tablet'} />
      </IsTablet>

      <IsDesktop>
        <CardContainer Card={Card} display={'desktop'} />
      </IsDesktop>
    </>
  ) : (
    <div />
  );
