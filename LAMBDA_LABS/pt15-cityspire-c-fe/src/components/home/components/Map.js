import React, { useState, useEffect, useRef } from 'react';
import mapboxgl, { Marker } from 'mapbox-gl';
import DetailsPane from './DetailsPane';
import '../../../antD/styles/map.css';
import { axiosAPICall } from '../../../utils/axiosEndpoints';
import { axiosCodes } from '../../../utils/axiosEndpoints';

import { axiosWithAuth } from '../../../utils/axiosWithAuth';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map = ({ mapLatLng, currentPlaceSelection }) => {
  const [marker, setMarker] = useState(null);

  // Lazy initialization, sets initial value one time, this is to keep the state alive.
  const [detailClicked, setDetailClicked] = useState(() => false);
  const mapContainerRef = useRef(null);
  const map = useRef();

  // On useEffect hooks, ORDER MATTERS, it must set the reference
  // to the map before accessing methods of map.
  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-104.9876, 39.7405],
      zoom: 12.5,
    });

    map.current.on('load', () => {
      map.current.resize();
    });

    map.current.on('click', () => {
      // Part of lazy initialization
      setDetailClicked(previousClicked => !previousClicked);
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    return () => map.current.remove();
  }, []);

  useEffect(() => {
    if (mapLatLng != null) {
      map.current.flyTo({
        center: mapLatLng,
      });
      if (marker != null) {
        marker.remove();
      }

      let mapMarker = new mapboxgl.Marker({
        anchor: 'bottom',
        offset: [0, 6],
      })
        .setLngLat([mapLatLng[0], mapLatLng[1]])
        .addTo(map.current);
      mapMarker.getElement().classList.add('clickable');
      setMarker(mapMarker);
    }
  }, [mapLatLng]);

  return (
    <>
      <div className="map-container" ref={mapContainerRef}>
        {detailClicked && (
          <DetailsPane currentPlaceSelection={currentPlaceSelection} />
        )}
      </div>
    </>
  );
};

export default Map;
