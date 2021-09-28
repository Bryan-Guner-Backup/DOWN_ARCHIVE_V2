import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { MainContext } from '../../../Context/MainContext';
import './RecommendedPlaylist.css';

const CREATE_RECOMMENDED_PLAYLIST = gql`
  mutation CreateRecommendedPlaylist($name: String!, $description: String) {
    createRecommendedPlaylist(name: $name, description: $description) {
      tracks
    }
  }
`;

const GET_TRACK_INFO = gql`
  query getTracksInfo($tracks: [String]!) {
    getTracksInfo(tracks: $tracks) {
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

const PlaylistView = props => {
  console.log('PlaylistView');
  const { loading, error, data } = useQuery(GET_TRACK_INFO, props.tracks, {
    notifyOnNetworkChange: true,
  });

  if (loading) {
    return <div style={{ color: 'white' }}>Loading</div>;
  }

  if (data) {
    return <div style={{ color: 'white' }}>Got the data</div>;
  }
};

const RecommendedPlayist = props => {
  const [state, setState] = React.useContext(MainContext);

  //Hook set up for input
  const [input, setInput] = useState({
    name: '',
    description: '',
  });

  const [recommendedPlayist, { loading, data }] = useMutation(
    CREATE_RECOMMENDED_PLAYLIST
  );

  const handleNameInput = event => {
    setInput({ name: event.target.value, description: input.description });
  };

  const handleDescInput = event => {
    setInput({ name: input.name, description: event.target.value });
  };

  const createPlaylist = async e => {
    e.preventDefault();

    const playlist = await recommendedPlayist({
      variables: { name: input.name, description: input.description },
    });

    setInput({
      name: '',
      description: '',
    });
    setState({
      ...state,
      currentPlaylist: playlist.data.createRecommendedPlaylist.tracks,
    });
  };

  if (loading) {
    return <div style={{ color: 'wite', fontSize: 24 }}>{loading}</div>;
  } else if (data) {
    return <Redirect to="/player-page" />;
  } else {
    return (
      <div className="rec-playlist-container">
        <form onSubmit={createPlaylist}>
          <h2>Create a recommened playlist based on your liked songs </h2>
          <input
            type="text"
            placeholder="Playlist Name"
            name="name"
            value={input.name}
            onChange={handleNameInput}
          />
          <input
            type="text"
            placeholder="Playlist Description"
            name="description"
            value={input.description}
            onChange={handleDescInput}
          />
          <button type="submit"> Create Playlist </button>
        </form>
      </div>
    );
  }
};

export default RecommendedPlayist;
