import React from 'react';
import './DiscoverPage.css';

function DiscoverPage() {
  return (
    <div className="discoverPage-container">
      <div className="discover-main">
        <h1>Discover Page Main Content</h1>
        <Playlist playlists={playlistList} />
      </div>
    </div>
  );
}

export default DiscoverPage;

function Playlist(props) {
  return (
    <div className="playlist-list">
      {props.playlists.map(playlist => (
        <div className="playlist">
          <img src={playlist.img} alt="" />
          <div className="name-auther">
            <h2>{playlist.name}</h2>
            <h3>{playlist.auther}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

//DUMY DATA

const playlistList = [
  {
    img:
      'https://katehoerner.com/wp-content/uploads/2019/03/Copy-of-Vinyl-Indie-Music-Festival-Concert-Poster-e1554981971429.png',
    name: 'Playlist-Name 1',
    auther: 'Auther-Name 1',
  },
  {
    img:
      'https://katehoerner.com/wp-content/uploads/2019/03/Copy-of-Vinyl-Indie-Music-Festival-Concert-Poster-e1554981971429.png',
    name: 'Playlist-Name 2',
    auther: 'Auther-Name 2',
  },
  {
    img:
      'https://katehoerner.com/wp-content/uploads/2019/03/Copy-of-Vinyl-Indie-Music-Festival-Concert-Poster-e1554981971429.png',
    name: 'Playlist-Name 3',
    auther: 'Auther-Name 3',
  },
  {
    img:
      'https://katehoerner.com/wp-content/uploads/2019/03/Copy-of-Vinyl-Indie-Music-Festival-Concert-Poster-e1554981971429.png',
    name: 'Playlist-Name 4',
    auther: 'Auther-Name 4',
  },
  {
    img:
      'https://katehoerner.com/wp-content/uploads/2019/03/Copy-of-Vinyl-Indie-Music-Festival-Concert-Poster-e1554981971429.png',
    name: 'Playlist-Name 5',
    auther: 'Auther-Name 5',
  },
  {
    img:
      'https://katehoerner.com/wp-content/uploads/2019/03/Copy-of-Vinyl-Indie-Music-Festival-Concert-Poster-e1554981971429.png',
    name: 'Playlist-Name 6',
    auther: 'Auther-Name 6',
  },
  {
    img:
      'https://katehoerner.com/wp-content/uploads/2019/03/Copy-of-Vinyl-Indie-Music-Festival-Concert-Poster-e1554981971429.png',
    name: 'Playlist-Name 7',
    auther: 'Auther-Name 7',
  },
  {
    img:
      'https://katehoerner.com/wp-content/uploads/2019/03/Copy-of-Vinyl-Indie-Music-Festival-Concert-Poster-e1554981971429.png',
    name: 'Playlist-Name 8',
    auther: 'Auther-Name 8',
  },
];
