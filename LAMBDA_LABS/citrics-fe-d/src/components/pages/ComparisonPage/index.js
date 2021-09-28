import React from 'react';
import Container from './Container';

export default function ComparisonPage(props) {
  const { currentCities } = props;

  return (
    <>
      <Container currentCities={currentCities} />
    </>
  );
}
