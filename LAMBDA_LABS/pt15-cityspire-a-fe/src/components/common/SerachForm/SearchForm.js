import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Geocoder from 'react-mapbox-gl-geocoder';
import { LocationContext } from '../../../state/contexts/LocationContext';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './searchForm.css';

const params = {
  country: 'us',
};

const mapboxApiKey = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const SearchForm = () => {
  const { updateLocation } = useContext(LocationContext);

  const [result, setResult] = useState({ city: '', center: [] });

  const onSelected = (viewport, item) => {
    setResult({ ...result, city: item.place_name, center: item.center });
    updateLocation(item.place_name, item.center);
  };

  const [viewport, setViewport] = useState({
    latitude: 45.50884,
    longitude: -73.58781,
    zoom: 15,
  });

  return (
    <div className="searchFormWrapper">
      <Geocoder
        mapboxApiAccessToken={mapboxApiKey}
        onSelected={onSelected}
        viewport={viewport}
        hideOnSelect={true}
        updateInputOnSelect={true}
        value={result}
        queryParams={params}
        limit={3}
      />
      {result.city ? (
        <Link to="/results">
          {' '}
          <Button type="primary" htmlType="submit">
            Show Details
          </Button>
        </Link>
      ) : (
        <Button type="primary" disabled htmlType="submit">
          Show Details
        </Button>
      )}
    </div>
  );
};

export default SearchForm;
