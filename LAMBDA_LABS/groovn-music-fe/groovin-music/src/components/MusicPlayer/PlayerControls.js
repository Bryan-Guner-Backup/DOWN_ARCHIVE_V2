import React from 'react';
import UseMusicPlayer from '../../hooks/useMusicPlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faPause,
  faPlay,
  faStepBackward,
  faStepForward,
} from '@fortawesome/free-solid-svg-icons';

function PlayerControls() {
  const {
    isPlaying,
    currentTrackName,
    togglePlay,
    playPreviousTrack,
    playNextTrack,
    
  } = UseMusicPlayer();

  return (
    <>
      <div className="box controls has background-grey-dark">
        <div className="current-track has-text-light">
          <marquee>{currentTrackName}</marquee>
        </div>
        <div>
          <button
            className="button has-text-light has-background-grey-dark"
            onClick={playPreviousTrack}
            disabled={!currentTrackName}
          >
            <FontAwesomeIcon icon={faStepBackward} />
          </button>
          <button
            className="button has-text-light has-background-grey-dark"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
          <button
            className="button has-text-light has-background-grey-dark"
            onClick={playNextTrack}
            disabled={!currentTrackName}
          >
            <FontAwesomeIcon icon={faStepForward} />
          </button>
        </div>
      </div>
    </>
  );
}

export default PlayerControls;

//disabled={!currentTrackName}
