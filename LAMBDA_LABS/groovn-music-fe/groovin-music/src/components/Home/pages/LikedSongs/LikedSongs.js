import React, { useContext } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { NavLink, Redirect } from 'react-router-dom';
import { MainContext } from '../../../Context/MainContext';

//import './HomeMain.css';

const TRACK_QUERY = gql`
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

let redirect = false;

const LikedSongs = () => {
  const [state, setState] = useContext(MainContext);

  const { loading, error, data } = useQuery(TRACK_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  const playSong = e => {
    setState({
      ...state,
      currentPlaylist: [e.target.songId],
      currentSongIndex: 0,
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error.message}</div>;
  } else if(!data.getLikedTracks) {
      return <div><p>No Liked Songs</p></div>;
  }

  let songList = data.getLikedTracks.map((song, index) => {
    if (index < 50) {
      return (
        <div className="homepage-item" key={song.albumName}>
          <img
            src={song.albumCover}
            atl={song.albumName}
            songId={song.id}
            onClick={playSong}
          />
          <h4>{song.name}</h4>
          <h5>{song.artists[0].name}</h5>
        </div>
      );
    }
  });

  return songList;
};

export default function RecentlyPlayed() {
  return (
    <div>
      <h2>Liked Songs</h2>
      <div className="homepage-item-container">
        <LikedSongs />
      </div>
    </div>
  );
}
