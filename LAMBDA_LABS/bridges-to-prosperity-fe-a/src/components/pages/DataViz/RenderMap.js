import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { MenuOutlined } from '@ant-design/icons';
import useKeypress from '../../common/UseKeypress';

import React, { useState, useRef, useContext, useEffect } from 'react';
import ReactMapGL, {
  FullscreenControl,
  NavigationControl,
  Source,
  Layer,
} from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import { BridgesContext } from '../../../state/bridgesContext';
import BridgeCard from './bridge_card';
import FilterBridgesCheckboxes from './FilterBridgesCheckboxes';
import bridgePin from '../../../styles/imgs/pin.png';
import rejectPin from '../../../styles/imgs/newIcons/Rejected.png';
import completedPin from '../../../styles/imgs/newIcons/Completed.png';
import identifiedPin from '../../../styles/imgs/newIcons/Identified.png';
import confirmedPin from '../../../styles/imgs/newIcons/Confirmed.png';
import prospectingPin from '../../../styles/imgs/newIcons/Prospecting.png';
import underConstructionPin from '../../../styles/imgs/newIcons/Under Construction.png';
import '../DataViz/Graphs/LeftSideBar';
import LeftSideBar from '../DataViz/Graphs/LeftSideBar';
import noStatus from '../../../styles/imgs/newIcons/No Status.png';
import hospitalPin from '../../../styles/imgs/newIcons/hospital.png';

let maxBounds = {
  minLatitude: -70,
  minLongitude: -180,
  maxLatitude: 75,
  maxLongitude: 91,
};

const RenderMap = () => {
  const { bridgeData, detailsData, setDetailsData, hospitalData } = useContext(
    BridgesContext
  );
  const [fullscreen, setFullscreen] = useState(false);

  const [viewport, setViewport] = useState({
    latitude: -1.9444,
    longitude: 30.0616,
    zoom: 7.5,
    bearing: 0,
    pitch: 0,
  });
  const geocoderContainerRef = useRef();
  const mapRef = useRef();
  const [rejectedChecked, setRejectedChecked] = useState(false);
  const [identifiedChecked, setIdentifiedChecked] = useState(false);
  const [completedChecked, setCompletedChecked] = useState(true);
  const [confirmedChecked, setConfirmedChecked] = useState(false);
  const [prospectingChecked, setProspectingChecked] = useState(false);
  const [constructionChecked, setConstructionChecked] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  useKeypress('Escape', () => {
    setFullscreen(false);
    setDetailsData(null);
  });

  let geojson = {
    type: 'FeatureCollection',
    features: [],
  };
  let featureCollection = [];

  let hospitaljson = {
    type: 'FeatureCollection',
    features: [],
  };

  if (hospitalData) {
    hospitalData.forEach(hospital => {
      hospitaljson.features.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [hospital.long, hospital.lat],
        },
      });
    });
  }

  //this will run function after bridges will be filtered
  function certainBridgeShows(bridges) {
    bridges.forEach(bridge => {
      if (bridge.stage === 'Rejected') {

        featureCollection.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [bridge.long, bridge.lat],
          },
          properties: {
            title: 'Rejected',
          },
        });
      } else if (bridge.stage === 'Complete') {
        featureCollection.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [bridge.long, bridge.lat],
          },
          properties: {
            title: 'Complete',
          },
        });
      } else if (bridge.stage === 'Identified') {
        featureCollection.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [bridge.long, bridge.lat],
          },
          properties: {
            title: 'Identified',
          },
        });
      } else if (bridge.stage === 'Confirmed') {
        featureCollection.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [bridge.long, bridge.lat],
          },
          properties: {
            title: 'Confirmed',
          },
        });
      } else if (bridge.stage === 'Prospecting') {
        featureCollection.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [bridge.long, bridge.lat],
          },
          properties: {
            title: 'Prospecting',
          },
        });
      } else if (bridge.stage === 'Under Construction') {
        featureCollection.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [bridge.long, bridge.lat],
          },
          properties: {
            title: 'Under Construction',
          },
        });
      } else {
        featureCollection.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [bridge.long, bridge.lat],
          },
        });
      }
    });
  }
  // bridges are now being filtered by the bridges stages
  if (bridgeData) {
    let rejected = bridgeData.filter(bridge => bridge.stage === 'Rejected');
    if (rejectedChecked) {
      certainBridgeShows(rejected);
    }
    let Identified = bridgeData.filter(bridge => bridge.stage === 'Identified');
    if (identifiedChecked) {
      certainBridgeShows(Identified);
    }
    let Complete = bridgeData.filter(bridge => bridge.stage === 'Complete');
    if (completedChecked) {
      certainBridgeShows(Complete);
    }
    let Confirmed = bridgeData.filter(bridge => bridge.stage === 'Confirmed');
    if (confirmedChecked) {
      certainBridgeShows(Confirmed);
    }
    let Prospecting = bridgeData.filter(
      bridge => bridge.stage === 'Prospecting'
    );
    if (prospectingChecked) {
      certainBridgeShows(Prospecting);
    }
    let Under_Construction = bridgeData.filter(
      bridge => bridge.stage === 'Under Construction'
    );
    if (constructionChecked) {
      certainBridgeShows(Under_Construction);
    }
  }

  geojson.features = featureCollection;

  const handleViewportChange = viewport => {
    if (viewport.longitude < maxBounds.minLongitude) {
      viewport.longitude = maxBounds.minLongitude;
    } else if (viewport.longitude > maxBounds.maxLongitude) {
      viewport.longitude = maxBounds.maxLongitude;
    } else if (viewport.latitude < maxBounds.minLatitude) {
      viewport.latitude = maxBounds.minLatitude;
    } else if (viewport.latitude > maxBounds.maxLatitude) {
      viewport.latitude = maxBounds.maxLatitude;
    }
    setViewport(viewport);
  };

  const handleClick = event => {
    const { features } = event;

    const clickedFeature =
      features && features.find(f => f.layer.id === 'data');

    if (features.length > 0) {
      var coordinates = features[0].geometry.coordinates.slice();
      coordinates[0] = parseFloat(coordinates[0].toFixed(2));
      coordinates[1] = parseFloat(coordinates[1].toFixed(2));
    }

    let bridge;

    if (clickedFeature) {
      bridge = bridgeData.find(f => {
        if (f.lat & f.long) {
          if (
            (parseFloat(f.long.toFixed(2)) === coordinates[0]) &
            (parseFloat(f.lat.toFixed(2)) === coordinates[1])
          ) {
            return f;
          }
        }
      });
    }

    setDetailsData(bridge);
  };
  let screenHeight = '90vh';
  let screenWidth = '90%';
  let disappear = '';
  if (window.innerWidth < 600) {
    screenHeight = '70vh';
    screenWidth = '100%';
    disappear = 'hidden';
  }

  function myFunction() {
    var x = document.getElementById('show');
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
  }
  function handleClose(e) {
    console.log(e);
    if (e.key === 'Escape') {
      setFullscreen(false);
    }
  }

  let hoveredStateId = null;

  const paint = {};

  return (
    <div className="mapbox-react">
      <ReactMapGL
        id="map"
        className="map"
        ref={mapRef}
        {...viewport}
        width={screenWidth}
        height={screenHeight}
        mapStyle="mapbox://styles/bridgestoprosperity/ckhdtr11l01bf19pj2hkgevfk"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        interactiveLayerIds={['data', 'hospital']}
        onClick={handleClick}
        maxZoom={40}
        minZoom={1}
        // onMouseMove={(e) => {
        //   if (e.features.length > 0) {
        //     if (hoveredStateId) {
        //       e.setFeatureState(
        //         { source: 'village-boundaries', id: hoveredStateId },
        //         { hover: false }
        //       );
        //     }
        //     hoveredStateId = e.features[0].id;
        //     e.setFeatureState(
        //       { source: 'village-boundaries', id: hoveredStateId },
        //       { hover: true }
        //     );
        //   }
        // }}
        onLoad={() => {
          if (!mapRef) return;
          const map = mapRef.current.getMap();

          map.loadImage(noStatus, (error, image) => {
            if (error) return;
            map.addImage('noStatusPin', image);
          });

          map.loadImage(rejectPin, (error, image) => {
            if (error) return;
            map.addImage('rejectPin', image);
          });
          map.loadImage(completedPin, (error, image) => {
            if (error) return;
            map.addImage('completedPin', image);
          });
          map.loadImage(identifiedPin, (error, image) => {
            if (error) return;
            map.addImage('identifiedPin', image);
          });
          map.loadImage(confirmedPin, (error, image) => {
            if (error) return;
            map.addImage('confirmedPin', image);
          });
          map.loadImage(prospectingPin, (error, image) => {
            if (error) return;
            map.addImage('prospectingPin', image);
          });
          map.loadImage(underConstructionPin, (error, image) => {
            if (error) return;
            map.addImage('underConstructionPin', image);
          });

          map.loadImage(hospitalPin, (error, image) => {
            if (error) return;
            map.addImage('hospitalPin', image);
          });
        }}
      >
        {/*This source component can be edited to show villages, districts, and
        sectors*/}
        <Source
          id="village-boundaries"
          type="vector"
          promoted="Distr_ID"
          url="mapbox://bridgestoprosperity.85sos76r"
        >
          <Layer
            id="boundaries"
            type="fill"
            source="village-boundaries"
            source-layer="Rwanda_Village_Boundaries2-agbitm"
            paint={{
              'fill-color': [
                'rgb',
                ['%', ['*', 1023, ['to-number', ['get', 'Distr_ID']]], 256],
                ['%', ['*', 757, ['to-number', ['get', 'Distr_ID']]], 256],
                ['%', ['*', 911, ['to-number', ['get', 'Distr_ID']]], 256],
              ],
              'fill-opacity': [
                'case',
                ['boolean', ['feature-state', 'hover'], true],
                0.2,
                0.4,
              ],
            }}
          />
        </Source>
        <Layer
          id="layer2"
          type="symbol"
          source="village-boundaries"
          source-layer="Rwanda_Village_Boundaries2-agbitm"
          layout={{
            'text-field': [
              'format',
              ['get', 'Name'],
              { 'font-scale': 1.0 },
              '\n',
              {},
              ['get', 'title'],
              {
                'font-scale': 0.8,
                'text-font': [
                  'literal',
                  ['DIN Offc Pro Italic', 'Arial Unicode MS Regular'],
                ],
              },
            ],
          }}
        />
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer
            id="data"
            type="symbol"
            layout={{
              'icon-image': [
                'match',
                ['get', 'title'],
                'Rejected',
                'rejectPin',
                'Complete',
                'completedPin',
                'Identified',
                'identifiedPin',
                'Confirmed',
                'confirmedPin',
                'Prospecting',
                'prospectingPin',
                'Under Construction',
                'underConstructionPin',
                'noStatusPin',
              ],
              'icon-size': [
                'interpolate',
                ['linear'],
                ['zoom'],
                4,
                0.45,
                6,
                0.35,
                10,
                0.25,
                15,
                0.2,
              ],
            }}
          />
        </Source>


        <Source id="hospital-data" type="geojson" data={hospitaljson}>
          <Layer
            id="hospital"
            type="symbol"
            layout={{
              'icon-image': 'hospitalPin',
              'icon-size': [
                'interpolate',
                ['linear'],
                ['zoom'],
                4,
                0.45,
                6,
                0.35,
                10,
                0.25,
                15,
                0.2,
              ],
            }}
          />
        </Source>
        <div className="toggle">
          <MenuOutlined
            onClick={() => {
              // myFunction();
              setSidebar(true);
            }}
            style={{ fontSize: '20px' }}
          />
        </div>

        <div
          className="fullScreenControl"
          onClick={() => setFullscreen(!fullscreen)}
        >
          <FullscreenControl />
        </div>
        <div className="navigationControl">
          <NavigationControl />
        </div>
        <div className={`desktop ${disappear}`} id="show">
          <div ref={geocoderContainerRef} className="search-bar">
            <Geocoder
              mapRef={mapRef}
              countries="rw"
              marker={false}
              onViewportChange={handleViewportChange}
              containerRef={geocoderContainerRef}
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              position="top-left"
            />
          </div>

          <div className="check-box">
            <FilterBridgesCheckboxes
              certainBridgeShows={certainBridgeShows}
              completedChecked={completedChecked}
              setCompletedChecked={setCompletedChecked}
              rejectedChecked={rejectedChecked}
              setRejectedChecked={setRejectedChecked}
              identifiedChecked={identifiedChecked}
              setIdentifiedChecked={setIdentifiedChecked}
              confirmedChecked={confirmedChecked}
              setConfirmedChecked={setConfirmedChecked}
              prospectingChecked={prospectingChecked}
              setProspectingChecked={setProspectingChecked}
              constructionChecked={constructionChecked}
              setConstructionChecked={setConstructionChecked}
            />
          </div>
        </div>
      </ReactMapGL>
      <LeftSideBar sidebar={sidebar} setSidebar={setSidebar} />
      {!fullscreen && detailsData && <BridgeCard />}
    </div>
  );
};

export default RenderMap;
