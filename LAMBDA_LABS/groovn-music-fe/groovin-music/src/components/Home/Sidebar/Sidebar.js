import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './Sidebar.css';

function logout() {
  //document.cookie = 'connect.sid=';
  axios({
    method: 'GET',
    url: 'http://localhost:4000/logout',
  })
    .then(res => res)
    .catch(err => console.log(err.message));
}

export default function Sidebar() {
  return (
    <div className="side-bar">
      <div className="navLinks">
        <NavLink className="navLink" to="/">
          Home
        </NavLink>
        <NavLink className="navLink" to="/player-page">
          Player
        </NavLink>
        <NavLink className="navLink" to="/recommended-playlist">
          Recommended Playlist
        </NavLink>
        <NavLink className="navLink" to="/liked-songs">
          Liked Songs
        </NavLink>
        <NavLink className="navLink" to="/playlist-page">
          Playlists
        </NavLink>
        <a className="navLink" href="http://localhost:4000/logout">
          Logout
        </a>
      </div>
    </div>
  );
}

//      <input type="text" name="search" placeholder="search" />
