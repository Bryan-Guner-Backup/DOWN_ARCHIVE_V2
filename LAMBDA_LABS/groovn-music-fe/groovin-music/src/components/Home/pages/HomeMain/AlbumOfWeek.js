import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import './HomeMain.css';

const RANDOM_TRACK_QUERY = gql`
  query tracks {
    getLikedTracks {
      id
      name
      albumName
      albumCover
      artists {
        name
      }
    }
  }
`;

const RandomTrack = () => {
  const { loading, error, data } = useQuery(RANDOM_TRACK_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error.message}</div>;
  }

  let num;
  function randomize() {
    num = Math.floor(data.getLikedTracks.length * Math.random());

    if (num < data.getLikedTracks.length) {
      return num;
    } else {
      num = 0;
      return 0;
    }
  }

  const imageStyle = {
    backgroundImage: `url(${data.getLikedTracks[randomize()].albumCover})`,
  };

  return (
    <div className="album-container">
      <img
        className="album-image"
        src={data.getLikedTracks[randomize()].albumCover}
      ></img>
      <div className="album-text">
        <h2>{data.getLikedTracks[num].name}</h2>
        <h3>{data.getLikedTracks[num].albumName}</h3>
        <h3>{data.getLikedTracks[num].artists[0].name}</h3>
      </div>
    </div>
  );
};

function AlbumOfWeek() {
  return (
    <div className="album-of-week">
      <RandomTrack />
    </div>
  );
}

export default AlbumOfWeek;
