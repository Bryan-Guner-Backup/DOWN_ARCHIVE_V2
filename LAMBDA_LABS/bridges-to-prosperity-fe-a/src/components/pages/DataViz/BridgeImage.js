import React, { useContext, useState } from 'react';
import { LinearInterpolator } from 'react-map-gl';
import { BridgesContext } from '../../../state/bridgesContext';
const BridgeImage = ({ marker, setViewport }) => {
  const { setDetailsData } = useContext(BridgesContext);

  return (
    <>
      <img
        alt="bridge-icon"
        className="bridgeImg"
        onClick={() => {
          setDetailsData(marker);
          setViewport({
            latitude: marker.Lat,
            longitude: marker.Long,
            transitionDuration: 1500,
            transitionInterpolator: new LinearInterpolator(),
            zoom: 11,
          });
        }}
        src={require('../../../styles/imgs/bridgeIconGreen.png')}
      />
    </>
  );
};

export default BridgeImage;
