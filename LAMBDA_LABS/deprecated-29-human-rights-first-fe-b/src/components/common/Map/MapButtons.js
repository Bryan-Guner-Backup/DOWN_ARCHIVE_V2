import React, { useState } from 'react';
import { Button, Result } from 'antd';
import statesDB from '../../../database/states.json';
import { useSelector } from 'react-redux';
import { WarningFilled } from '@ant-design/icons';

const MapButtons = ({ scrollEnabled, map, usZips, switchStateJump }) => {
  const [stateName, zipCode] = useSelector(state => [
    state.filters.stateName,
    state.filters.zipCode,
  ]);
  const [display, setDisplay] = useState('none');

  const setDisplayNone = () => {
    setDisplay('none');
  };
  const setDisplayBlock = () => {
    setDisplay('block');
  };

  // ----- setting up state jump
  if (stateName) {
    const selectedState = statesDB.filter(state => {
      return state.state === stateName;
    });

    map.jumpTo({
      center: [selectedState[0].longitude, selectedState[0].latitude],
      zoom: 7,
      essential: true,
    });
  }

  // --- setting up zipCode jump
  if (usZips[zipCode]) {
    map.jumpTo({
      center: [usZips[zipCode].longitude, usZips[zipCode].latitude],
      zoom: 12,
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    });
  }

  return (
    <div>
      <Button
        type="primary"
        className="appear"
        style={{
          zIndex: 10,
          position: 'absolute',
          width: '200px',
          marginTop: '34px',
          display: display,
          opacity: 1,
        }}
        onClick={switchStateJump}
      >
        Fast Travel States
      </Button>
      <Button
        type="primary"
        className="appear"
        style={{
          zIndex: 10,
          position: 'absolute',
          width: '200px',
          display: display,
          opacity: 1,
        }}
        onClick={() => {
          if (scrollEnabled) {
            map.scrollZoom.disable();
            scrollEnabled = false;
          } else {
            map.scrollZoom.enable();
            scrollEnabled = true;
          }
        }}
      >
        Scroll Zoom
      </Button>

      <Button
        type="primary"
        className="appear"
        style={{
          zIndex: 10,
          position: 'absolute',
          width: '200px',
          marginTop: '68px',
          display: display,
          opacity: 1,
        }}
        onClick={() => {
          map.jumpTo({
            center: [-95.712891, 37.09024],
            zoom: 1,
          });
        }}
      >
        Reset Map View
      </Button>
      {display === 'none' ? (
        <Button
          type="primary"
          id="showBtn"
          style={{
            zIndex: 10,
            position: 'absolute',
            width: '200px',
            display: 'block',
          }}
          onClick={setDisplayBlock}
        >
          Show Map Options 🔽
        </Button>
      ) : null}

      <Button
        type="primary"
        id="hideBtn"
        style={{
          zIndex: 10,
          position: 'absolute',
          width: '200px',
          marginTop: '102px',
          display: display,
          opacity: 1,
        }}
        onClick={setDisplayNone}
      >
        Hide Map Options 🔼
      </Button>
    </div>
  );
};

export default MapButtons;
