/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable padded-blocks */
// eslint-disable-next-line object-curly-spacing
import React, { useState, useContext } from 'react'
import MapGL, { Marker } from 'react-map-gl'
import { UserContext } from '../../UserContext'
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle'

function Map (props) {
  // eslint-disable-next-line indent
  const { user, setUser } = useContext(UserContext)
  const myConnections = props.connections

  const [viewport, setViewport] = useState({
    latitude: 9.082000,
    longitude: 8.675300,
    zoom: 3.5,
    width: '100%',
    height: '200px'
  })

  return (
    <div className="map">
      <MapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoidGltaXNtYXAiLCJhIjoiY2tjcnZza2cyMDEwYzJycWo2Ynp0dGt1YiJ9.YXA40zBV_jsV-IAmvL0d2Q"
        onViewportChange={(viewport) => {
          setViewport(viewport)
        }}
        mapStyle="mapbox://styles/timismap/ckcrz63oi0cti1imla80jwj1s"
      >
        {myConnections.length > 0 && myConnections.map(connection => {
          return <Marker latitude={connection.latitude} longitude={connection.longitude}>
            <div className='marker'>
              <h5>{connection.first_name} {connection.last_name}</h5>
              <PersonPinCircleIcon />
            </div>
          </Marker>
        })}
      </MapGL>
    </div>
  )
}

export default Map
