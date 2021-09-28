import React from 'react';
import { Route } from 'react-router-dom';

import HomeMain from './pages/HomeMain/HomeMain.js';
import PlayerPage from './pages/PlayerPage/PlayerPage.js';
import Sidebar from './Sidebar/Sidebar.js';
import ReccommendedPlaylist from './pages/RecommendedPlaylistPage/RecommendedPlaylist';
import LikedSongs from './pages/LikedSongs/LikedSongs.js';
import Playlist from './pages/PlaylistPage/Playlist.js';

import './Homepage.css';

export default function Homepage() {
  return (
    <div className="homepage-container">
      {/* add nav bar here */}

      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="main">
        <Route exact path="/" component={HomeMain} />
        <Route path="/player-page" component={PlayerPage} />
        <Route path="/recommended-playlist" component={ReccommendedPlaylist} />
        <Route path="/liked-songs" component={LikedSongs} />
        <Route path="/playlist-page" component={Playlist} />
      </div>

      {/* add footer here */}
    </div>
  );
}
