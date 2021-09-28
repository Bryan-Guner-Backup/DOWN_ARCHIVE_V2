import React, { useEffect, useState, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as mapboxgl from 'mapbox-gl';
import statesDB from '../../../database/states.json';
import { Button } from 'antd';
import usZips from 'us-zips';
import MapButtons from './MapButtons';
import incidentsDB from '../../../database/data2.json';
import TwitterPopup from './TwitterPopup';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { policeBadge, policeHelmet } from '../../../assets/';
import { rankingChart, parsedEvent } from './assets';

import { fetchIncidents } from '../../../state/actions';

const Map = () => {
  // using a NYC API to get dummy data for display on the map
  // this will be replaced with our project's backend once it's ready
  let scrollEnabled = false; // toggles scroll zoom -- can't use useState because it rerenders the map
  const [incidentRank, events] = useSelector(state => [
    state.filters.incidents,
    state.fetchIncidentsReducer.incidents,
  ]);
  const stateJump = useRef(false);
  const switchStateJump = () => {
    stateJump.current = !stateJump.current;
  };
  const [updatedIncidents, setUpdatedIncidents] = useState([]);

  const dispatch = useDispatch();
  // ----------- map

  const bounds = [
    [-127.265625, 23.244696],
    [-64.6875, 52.064192],
  ];

  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

  // creating this object renders the map
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
    center: [-95.712891, 37.09024], // starting position [lng, lat]
    zoom: 1, // starting zoom
    maxBounds: bounds, // Sets bounds as max
  });

  // brings us to user location
  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    })
  );

  // simple navigation: +/-/rotate
  map.addControl(new mapboxgl.NavigationControl());

  // disable initial scrolling -- toggle it on and off with a button
  map.scrollZoom.disable();

  // Controls the parsing for the events that should be rendered
  useEffect(() => {
    const parsedIncidents = events.map(incident => parsedEvent(incident));
    if (
      // Doesn't filter when every checkbox is true, just puts all incidents on the map
      incidentRank['policePresence'] &&
      incidentRank['emptyHandForce'] &&
      incidentRank['bluntForceWeapons'] &&
      incidentRank['chemicalAndElectricalWeapons'] &&
      incidentRank['lethalForce']
    ) {
      setUpdatedIncidents(parsedIncidents);
    } else {
      // Runs whenever any checkbox is false // Filters out based on the filtered state in global
      let filteredIncidents = parsedIncidents.filter(incident => {
        //building tags to compare incoming data by from internal assets
        const selectedTags = [];
        //Ranks that are chosen have their tags pushed onto selectedTags to be used in determining whether current incident should be rendered.
        for (let [key, value] of Object.entries(rankingChart)) {
          if (incidentRank[key]) {
            value.forEach(tag => {
              selectedTags.push(tag);
            });
          }
        }

        const curTags = incident.properties.type;
        let include = false;
        // Checks the tags of current incident to see if they are in the list of selectedTags
        curTags.forEach(tag => {
          if (selectedTags.indexOf(tag) > -1) {
            include = true;
          }
        });
        //Incident filtered in for rendering if tags match the ones the user is trying to filter in.
        return include;
      });
      setUpdatedIncidents(filteredIncidents);
    }
  }, [events, incidentRank]);

  const geojson2 = incidentsDB.data.map(incident => ({
    geometry: {
      type: 'Point',
      coordinates: [
        parseFloat(incident.LONGITUDE),
        parseFloat(incident.LATITUDE),
      ],
    },
    type: 'Feature',
    properties: {
      id: incident.id,
      date_text: incident['date_text'],
      title: incident.text,
      type: incident['tags_str'],
      link1: incident.Link1,
      link2: incident.Link2,
    },
  }));

  // --- initiating set up for when map loads
  let hoveredStateId = null;

  map.on('load', e => {
    // ---- individual states ----
    map.addSource('states', {
      type: 'geojson',
      data: 'https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson',
    });

    // opacity expression will render the hover effect when a feature's hover state is set to true.
    map.addLayer({
      id: 'state-fills',
      type: 'fill',
      source: 'states',
      layout: {},
      paint: {
        'fill-color': 'rgb(217,169,210)',
        'fill-opacity': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          0.1,
          0,
        ],
      },
    });

    map.addLayer({
      id: 'state-borders',
      type: 'line',
      source: 'states',
      layout: {},
      paint: {
        'line-color': 'rgb(242,140,177)',
        'line-width': 2,
        'line-opacity': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          0.6,
          0,
        ],
      },
    });

    // When the user moves over the states, we will update them -- using state's id
    map.on('mousemove', 'state-fills', function(e) {
      if (stateJump.current) {
        if (e.features.length > 0) {
          if (hoveredStateId) {
            map.setFeatureState(
              { source: 'states', id: hoveredStateId },
              { hover: false }
            );
          }
          hoveredStateId = e.features[0].id;
          map.setFeatureState(
            { source: 'states', id: hoveredStateId },
            { hover: true }
          );
        }
      }
    });

    // When the mouse leaves the state-fill layer, remove the fill color from it
    map.on('mouseleave', 'state-fills', function() {
      if (hoveredStateId) {
        map.setFeatureState(
          { source: 'states', id: hoveredStateId },
          { hover: false }
        );
      }
      hoveredStateId = null;
    });

    map.on('click', 'state-fills', function(e) {
      let currentState = statesDB.filter(state => {
        return state.state === e.features[0].properties.STATE_NAME;
      });
      if (hoveredStateId && stateJump.current) {
        map.flyTo({
          center: [currentState[0].longitude, currentState[0].latitude],
          zoom: 7,
          essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        });
      }
    });

    // ------- incidents data visualization (clusters)--------------

    // upload a custom icon image
    map.loadImage(
      // 'https://upload.wikimedia.org/wikipedia/commons/7/7c/201408_cat.png', // --> sample url
      policeBadge,
      function(error, image) {
        if (error) throw error;
        map.addImage('badge', image);
      }
    );

    map.loadImage(policeHelmet, function(error, image) {
      if (error) throw error;
      map.addImage('helmet', image);
    });

    // source in geojson format: list of all locations

    map.addSource('incidents', {
      type: 'geojson',
      data: { features: updatedIncidents },
      // data: 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson', // --> sample data (urls can be used)
      cluster: true,
      clusterMaxZoom: 14, // Max zoom to cluster points on
      clusterRadius: 50, // Radius of each cluster when clustering points (defaults to 50)
    }); // end of add Source

    // cluster layyer
    map.addLayer({
      id: 'clusters',
      type: 'circle',
      source: 'incidents',
      filter: [
        'all',
        // can specify here a specific incident type
        ['==', ['get', 'cluster'], true],
      ],
      paint: {
        'circle-color': 'rgba(0,0,0,.6)',
        'circle-stroke-color': [
          'step',
          ['get', 'point_count'],
          '#51bbd6', //   * Blue, 20px circles when point count is less than 100
          100,
          '#f1f075', //   * Yellow, 30px circles when point count is between 100 and 400
          400,
          '#f28cb1', //   * Pink, 40px circles when point count is greater than or equal to 400
        ],
        'circle-stroke-width': 5,
        'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 400, 40],
      },
    }); // end of cluster layer

    // count display on the clusters
    map.addLayer({
      id: 'cluster-count',
      type: 'symbol',
      source: 'incidents',
      // filter: ['has', 'point_count'],
      filter: [
        'all',
        // can specify here a specific incident type
        ['==', ['get', 'cluster'], true],
      ],
      layout: {
        'text-field': '{point_count_abbreviated}',
        'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
        'text-size': 13,
      },
      paint: {
        'text-color': '#8dd3c7',
      },
    }); // end of cluster-count layer

    // single point outer layer
    map.addLayer({
      id: 'unclestered-point-outer',
      type: 'circle',
      source: 'incidents',
      filter: [
        'all',
        // can specify here a specific incident type
        ['!=', ['get', 'cluster'], true],
      ],
      paint: {
        'circle-color': 'rgba(27,29,26, 0)',
        'circle-stroke-color': 'rgba(27,29,26, .1)',
        'circle-stroke-width': 3,
        'circle-radius': 2,
      },
    });

    // single point:
    map.addLayer({
      id: 'unclustered-point',
      type: 'symbol',
      source: 'incidents',
      filter: ['!', ['has', 'point_count']],
      layout: {
        visibility: 'visible',
        'icon-image': 'badge', // THIS SHOULD BE A MARKER
        'icon-size': 0.06, // ZOOMED FOR DEMO
        'icon-allow-overlap': true,
      },
      paint: {
        'icon-color': '#8dd3c7',
        'icon-halo-color': '#8dd3c7',
        'icon-halo-width': 2,
      },
    });

    // inspect a cluster on click
    map.on('click', 'clusters', function(e) {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ['clusters'],
      });
      const clusterId = features[0].properties.cluster_id;
      map
        .getSource('incidents')
        .getClusterExpansionZoom(clusterId, function(err, zoom) {
          if (err) return;

          map.easeTo({
            center: features[0].geometry.coordinates,
            zoom: zoom,
          });
        });
    });

    // pop up window for individual points
    map.on('click', 'unclustered-point', e => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      // currently the popup is populated with with the dummy data properties

      const incident = e.features[0].properties;
      const date = incident['date_text'];
      const title = incident.title;
      const type = incident.type;
      const link = incident.link1;

      // if map zoomed out such that multiple copies of the feature are visible, popup appears over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      const innerHtmlContent = `<div> <div style="display: flex; justify-content: space-between;"> <p>${date}</p>
         <p style="padding-right: 4%; opacity: .8">${type}</p></div>
          <h2>${title}</h2> <a target="_blank" href="${link}" id="link" style="font-size: 1rem; ">${link}</a>  
         <br>
         <br>
          </div>`;
      const divElement = document.createElement('div');
      divElement.setAttribute('id', 'hey');
      const assignBtn = document.createElement('div');
      assignBtn.setAttribute('id', 'assignBtn');
      if (incident.link1.toLowerCase().includes('twitter')) {
        assignBtn.innerHTML = `<button id="assign"> Learn More</button>`;
      }
      divElement.innerHTML = innerHtmlContent;
      divElement.appendChild(assignBtn);

      assignBtn.addEventListener('click', e => {
        const element = <TwitterPopup id="twitterpop" incident={incident} />;
        ReactDOM.render(element, document.getElementById('hey'));
      });

      new mapboxgl.Popup({ className: 'apple-popup' })
        .setLngLat(coordinates)
        .setDOMContent(divElement)
        .setMaxWidth('none')
        .addTo(map);
    });

    map.on('mouseenter', 'clusters', function() {
      map.getCanvas().style.cursor = 'crosshair';
    });
    map.on('mouseleave', 'clusters', function() {
      map.getCanvas().style.cursor = '';
    });

    map.on('mouseenter', 'unclustered-point', function() {
      map.getCanvas().style.cursor = 'crosshair';
    });
    map.on('mouseleave', 'unclustered-point', function() {
      map.getCanvas().style.cursor = '';
    });
  }); // end of main map.on()

  return (
    <>
      <div className="buttons">
        {/* this one button refuses to work when put into a different component */}

        <MapButtons
          scrollEnabled={scrollEnabled}
          map={map}
          usZips={usZips}
          switchStateJump={switchStateJump}
        />
      </div>
    </>
  );
};
export default Map;
