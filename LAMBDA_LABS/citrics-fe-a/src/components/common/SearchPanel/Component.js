import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { SearchBar } from '../../common';
import { cardContainerActs } from '../../../state/actions';

import styles from './styles.js';
import { useSelector, useDispatch } from 'react-redux';
import { Slider, Button } from 'antd';

export default ({ display }) => {
  const { fetchSpecificCityData } = cardContainerActs;
  const dispatch = useDispatch();
  const history = useHistory();
  const currentLocation = useLocation().pathname;
  const [cities, setCities] = useState([]);

  // When user selects second city, they are redirected to /pages/comparision component
  useEffect(() => {
    if (currentLocation != '/compare' && cities.length === 2)
      history.push('/compare');
    cities.forEach(c => {
      dispatch(fetchSpecificCityData(c.id, c.value));
    });
  }, [cities]);

  const onSelect = (value, city) => {
    setCities([...cities, city]);
  };

  const theme = useSelector(state => state.theme);
  const sty = styles(display, theme);

  return (
    <div
      style={{ ...sty.container, backgroundColor: 'unset' }}
    >
      <div style={{ ...sty.style2 }}>
        <SearchBar setCities={setCities} cities={cities} onSelect={onSelect} />
        <SearchBar setCities={setCities} cities={cities} onSelect={onSelect} />
      </div>
      {/* Code below renders the slider bars for search by detailed criteria...code left for future development. */}
      {/* <hr style={{ border: 'solid 2px white', width: '80%' }} />
      <div style={{ ...sty.style2 }}>
        <div style={{ ...sty.sliderStyle }}>
          <h4 style={{ margin: '0' }}>Population</h4>
          <Slider autoFocus={true} min={0} max={1000000} range={true} />
        </div>
        <div style={{ ...sty.sliderStyle }}>
          <h4 style={{ margin: '0' }}>Population</h4>
          <Slider autoFocus={true} min={0} max={1000000} range={true} />
        </div>
        <div style={{ ...sty.sliderStyle }}>
          <h4 style={{ margin: '0' }}>Population</h4>
          <Slider autoFocus={true} min={0} max={1000000} range={true} />
        </div>
      </div>
      <div>
        <Button>Find Cities</Button>
      </div> */}
    </div>
  );
};
