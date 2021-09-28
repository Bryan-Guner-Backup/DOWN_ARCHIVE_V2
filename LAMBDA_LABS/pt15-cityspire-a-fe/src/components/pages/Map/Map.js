import React, { useRef, useEffect, useContext } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { LocationContext } from '../../../state/contexts/LocationContext';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

import './Map.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function Map() {
  const { center } = useContext(LocationContext);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v11',
      center: center,
      zoom: 3.25,
    });

    const marker = new mapboxgl.Marker().setLngLat(center).addTo(map);

    return () => map.remove();
  }, [center]);

  return (
    <>
      <div className="map-container" ref={mapContainerRef} />
    </>
  );
}
export default Map;
