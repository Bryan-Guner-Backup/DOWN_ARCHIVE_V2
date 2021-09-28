import React, { useState, useContext, useEffect } from 'react';
import ReactMapGL, { Marker, FlyToInterpolater } from 'react-map-gl';
import locationOnSubmit from '../../utils/locationSubmit';
import { LocationContext } from '../../state/contexts';
import SearchBar from './Searchbar/SearchBar';

const Map = ({ initialstate }) => {
  const curr = useContext(LocationContext);
  const variable = initialstate
    ? initialstate
    : {
        latitude: 0,
        longitude: 0,
        width: '100vw',
        height: '100vh',
        zoom: 8,
      };
  // token to use mapbox, would like to set this up as a local env file but it keeps fucking up lol
  /*Sets up our initial state with needed information to pass to reactMapGL component*/

  const [viewport, setViewport] = useState(variable);

  {
    /*deconstruct the viewport opbject and pass it to ReactMapGL component*/
  }
  {
    /*Mapbox requires a token to be used so they can monitor your traffic. After a certain ammount of traffic you have to pay for it.*/
  }
  {
    /*styling is handled through adding a package to your mapbox account.*/
  }
  {
    /*updating the viewport object we pass to ReactMapGL so the user can drag and scroll. all we pass is the result of passing the previous viewport into our useState function.*/
  }
  {
    /*The Marker component takes latitude, longitude, and two boolians to prevent the map from being interacted with when the user clicks on the marker but can be passed more, if interested read here https://visgl.github.io/react-map-gl/docs/api-reference/marker#properties */
  }

  useEffect(() => {
    setViewport(curr.location);
  }, [curr.location]);
  return (
    <div style={{ position: 'relative' }}>
      {viewport && (
        <ReactMapGL
          {...viewport}
          style={{ zIndex: 0 }}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/onemiss/ckk1x7xcr16q917mjfrha2h2o"
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
        >
          <Marker
            latitude={40.73061}
            longitude={-73.935242}
            captureClick={true}
            captureDoubleClick={true}
          >
            <img src="img/pin.jpg" />
          </Marker>
          <SearchBar />
        </ReactMapGL>
      )}
    </div>
  );
};

export default Map;
