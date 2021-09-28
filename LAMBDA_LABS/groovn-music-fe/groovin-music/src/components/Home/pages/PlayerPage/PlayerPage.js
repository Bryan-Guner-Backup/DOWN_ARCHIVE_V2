import React from 'react';
import './PlayerPage.css';
import SpotifyPlayer from 'react-spotify-player';
import { MainContext } from '../../../Context/MainContext.js';

/**
 * This page displays the player component. There are two buttons
 * used to skip tracks back and forth.
 */

export default function PlayerPage() {
  //Hook for getting the Main context
  const [state, setState] = React.useContext(MainContext);

  //Skips forward a track by incrementing the currentTrackIndex value on the main context.  onClick method
  const nextTrack = () => {
    if (state.currentTrackIndex < state.currentPlaylist.length - 1) {
      setState({ ...state, currentTrackIndex: state.currentTrackIndex + 1 });
    } else {
      setState({ ...state, currentTrackIndex: 0 });
    }
  };

  //Skips backward a track by decrementing the currentTrackIndex value on the main context. onClick method
  const previousTrack = () => {
    if (state.currentTrackIndex > 0) {
      setState({ ...state, currentTrackIndex: state.currentTrackIndex - 1 });
    } else {
      setState({
        ...state,
        currentTrackIndex: state.currentPlaylist.length - 1,
      });
    }
  };

  // Renders the player componet and the buttons to skip tracks
  return (
    <div className="playerPage-container">
      <Player currentTrack={state.currentPlaylist[state.currentTrackIndex]} />
      <div className="skip-btn">
        <button onClick={previousTrack}>&#8920; Previous Track</button>
        <button onClick={nextTrack}>Next Track &#8921;</button>
      </div>
    </div>
  );
}

//Size variables for the spotify player component
const size = {
  width: '90%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

//Player functional component
export function Player(props) {
  return (
    <SpotifyPlayer
      uri={`spotify:track:${props.currentTrack}`}
      size={size}
      view={view}
      theme={theme}
    />
  );
}
