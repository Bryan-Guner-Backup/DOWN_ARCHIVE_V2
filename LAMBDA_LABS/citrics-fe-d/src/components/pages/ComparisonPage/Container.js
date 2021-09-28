import React from 'react';
import { Header } from '../../common/Header';
import { IfSearching } from '../../common/IfSearching';
import MainVisual from './MainVisual';

export default function Container(props) {
  const { currentCities } = props;
  return (
    <>
      <Header />
      <MainVisual currentCities={currentCities} />
    </>
  );
}
