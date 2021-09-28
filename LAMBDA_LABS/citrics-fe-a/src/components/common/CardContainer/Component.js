import React, { useEffect } from 'react';
import FadeIn from 'react-fade-in';
import { nanoid } from 'nanoid';
import styles from './styles';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { cardContainerActs } from '../../../state/actions';

// COMPONENTS
import { PlotlyCard, CityCard } from '../../common';

const graphLabels = [
  'Average Rental Prices',
  'Walkscore',
  'Population',
  'Average Temperature',
];

export default ({ Card, display }) => {
  const { cityData, nationalAverage } = useSelector(
    state => state.cardContainer
  );
  const theme = useSelector(state => state.theme);
  const sty = styles(display, theme);

  const dispatch = useDispatch();
  const { fetchNationalAverage } = cardContainerActs;

  const cityDataCopy = [];
  nationalAverage.color = theme.primaryDarker;
  nationalAverage.averagetemperature = '52.4';

  cityDataCopy.push(nationalAverage);

  useEffect(() => {
    dispatch(fetchNationalAverage());
  }, [cityData]);

  return Card === PlotlyCard ? (
    <div style={sty.plotlyCardContainer}>
      <FadeIn childTag="div">
        {graphLabels.map(label => (
          <Card key={nanoid()} graphLabel={label} data={cityDataCopy} />
        ))}
      </FadeIn>
    </div>
  ) : (
    <div style={sty.cityCardContainer}>
      {cityData.map(city => (
        <CityCard key={city.id} city={city} />
      ))}
      {nationalAverage !== undefined ? (
        <CityCard key={nationalAverage.id} city={nationalAverage} />
      ) : (
        <div />
      )}
    </div>
  );
};
