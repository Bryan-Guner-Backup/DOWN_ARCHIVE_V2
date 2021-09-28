import React from 'react';
import { Marker } from 'react-map-gl';
import BridgeImage from './BridgeImage';

const Markers = React.memo(({ bridgeData, setViewport }) => {
  return (
    <>
      {bridgeData &&
        bridgeData.map((marker, index) => {
          return marker.Lat & marker.Long ? (
            <div key={index}>
              <Marker latitude={marker.Lat} longitude={marker.Long}>
                <BridgeImage setViewport={setViewport} marker={marker} />
              </Marker>
            </div>
          ) : null;
        })}
    </>
  );
});

export default Markers;
