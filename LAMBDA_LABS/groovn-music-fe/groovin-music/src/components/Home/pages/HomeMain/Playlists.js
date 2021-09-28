import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { NavLink } from 'react-router-dom';
import { MainContext } from '../../../Context/MainContext';
import './HomeMain.css';

const PLAYLIST_QUERY = gql`
  query Playlists {
    getPlaylists {
      id
      name
    }
  }
`;

const PlaylistList = () => {
  const [state, setState] = React.useContext(MainContext);
  const { loading, error, data } = useQuery(PLAYLIST_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  const setPlaylist = e => {
    setState({ ...state, currentPlaylist: e.target.playlist.id });
  };

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error.message}</div>;
  } else if (!data.getPlaylists) {
    return (
      <div>
        <p>No Playlists</p>
      </div>
    );
  }


  let playlists = data.getPlaylists.map((playlist, index) => {
    if (index < 4) {
      return (
        <div
          className="homepage-item box"
          key={playlist.id}
          onClick={setPlaylist}
        >
          <h3>{playlist.name}</h3>
        </div>
      );
    }
  });

  return playlists;
};

export default function Playlists() {
  return (
    <div>
      <h3 className="section-title">Playlists</h3>
      <div className="homepage-item-container">
        <PlaylistList />
      </div>
      <NavLink className="see-all" to="/playlist-page">
        See All
      </NavLink>
    </div>
  );
}
