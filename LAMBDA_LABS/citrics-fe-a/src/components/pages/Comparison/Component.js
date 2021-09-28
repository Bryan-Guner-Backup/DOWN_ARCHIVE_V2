import React, { useState, useEffect } from 'react';
import { Canvas } from '../../layouts';
import CardContainer from '../../common/CardContainer';
import '../../../styles/ComparisonPage.less';
import { CityCard, PlotlyCard, SearchBar } from '../../common';
import { useSelector, useDispatch } from 'react-redux';
import { cardContainerActs } from '../../../state/actions';

// This page renders the comparative graphs for each selected city
export default ({ styles }) => {
  const cityData = useSelector(state => state.cardContainer.cityData);
  const [newCity, setNewCity] = useState();
  const { fetchSpecificCityData } = cardContainerActs;

  const dispatch = useDispatch();

  useEffect(() => {
    if (newCity) {
      dispatch(fetchSpecificCityData(newCity.id, newCity.value));
    }
  }, [newCity]);

  const onSelect = (value, city) => {
    setNewCity(city);
  };

  return (
    <Canvas
      Main={() => {
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              marginTop: '10%',
            }}
          >
            <SearchBar onSelect={onSelect} />
            {/* CityCard renders each city card above the graph container */}
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              {cityData.length && cityData.map(c => <CityCard city={c} />)}
            </div>
            {/* CardContainer holds the comparative graphs */}
            {cityData.length && (
              <CardContainer
                className="card-container"
                Card={PlotlyCard}
                styles={{ width: '70%' }}
              />
            )}
          </div>
        );
      }}
    />
  );
};
