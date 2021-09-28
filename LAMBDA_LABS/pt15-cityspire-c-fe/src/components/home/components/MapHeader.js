import React, { useState } from 'react';
import { Avatar, Button } from 'antd';
import { Link } from 'react-router-dom';
import AlgoliaPlaces from 'algolia-places-react';

import '../../../antD/styles/mapHeader.css';

const MapHeader = ({ setMapLatLng, setCurrentPlaceSelection }) => {
  const onAlgoliaChange = ({
    query,
    rawAnswer,
    suggestion,
    suggestionIndex,
  }) => {
    // Mouse Over and keyboard onChange event
    setMapLatLng([suggestion.latlng.lng, suggestion.latlng.lat]);

    setCurrentPlaceSelection({
      city: suggestion.name,
      state: suggestion.administrative,
      zip: suggestion.postcode,
      lat: suggestion.latlng.lat,
      lng: suggestion.latlng.lng,
    });
  };

  const onAlgoliaSuggestions = ({ rawAnswer, query, suggestions }) => {
    // Validation event when something has been selected.
  };

  const onAlgoliaCursorChanged = ({
    query,
    rawAnswer,
    suggestion,
    suggestionIndex,
  }) => {
    // When keyboard arrows or mouse are used to go through suggestions
  };

  const onAlgoliaClear = () => {
    // Input clear (the X button)
  };

  const onAlgoliaLimit = ({ message }) => {
    // Current rate limit exceeded
  };
  const onAlgoliaError = ({ message }) => {
    // Some type of server error such as could not reach the server
  };

  return (
    <div className="map-header">
      <div className="left-header-section">
        <AlgoliaPlaces
          className="algolia-places"
          placeholder="Search for a city"
          options={{
            appId: process.env.REACT_APP_ALGOLIA_PLACES_APP_ID,
            apiKey: process.env.REACT_APP_ALGOLIA_PLACES_API_KEY,
            language: process.env.REACT_APP_ALGOLIA_PLACES_LANGUAGE,
            countries: [process.env.REACT_APP_ALGOLIA_PLACES_COUNTRIES],
            type: process.env.REACT_APP_ALGOLIA_PLACES_TYPE,
          }}
          onChange={onAlgoliaChange}
          onSuggestions={onAlgoliaSuggestions}
          onCursorChanged={onAlgoliaCursorChanged}
          onClear={onAlgoliaClear}
          onLimit={onAlgoliaLimit}
          onError={onAlgoliaError}
        />
      </div>
      <div className="right-header-section">
        <div className="right-content">
          <Link to="/dashboard">
            <Button type="text" className="dashboard-button">
              Dashboard
            </Button>
          </Link>

          <Avatar shape="square" size={56} className="avatar" />
        </div>
      </div>
    </div>
  );
};

export default MapHeader;
