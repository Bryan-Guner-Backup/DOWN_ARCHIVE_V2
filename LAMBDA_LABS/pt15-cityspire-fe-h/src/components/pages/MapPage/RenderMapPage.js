import React, { useState, useContext, useLayoutEffect } from 'react';
import ReactMapGL, { Marker, FlyToInterpolater } from 'react-map-gl';
import locationOnSubmit from '../../../utils/locationSubmit';
import { LocationContext } from '../../../state/contexts';
import Map from '../../common/Map';

const RenderMapPage = () => {
  const curr = useContext(LocationContext);
  // token to use mapbox, would like to set this up as a local env file but it keeps fucking up lol
  /*Sets up our initial state with needed information to pass to reactMapGL component*/

  const [viewport, setViewport] = useState(curr.location);
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
  useLayoutEffect(() => {
    setViewport(curr.location);
  }, [curr]);

  return (
    <>{Object.keys(viewport).length > 0 && <Map initialstate={viewport} />}</>
  );
};

export default RenderMapPage;
