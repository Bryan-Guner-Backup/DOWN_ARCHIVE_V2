import React, { useState } from 'react';

const MusicPlayerContext = React.createContext([
  {
    tracks: [
      '1nnUrCxOSuGhfR0elOI2ZQ',
      '0uuH3Htpahzscc1YSG833Z',
      '5DjNBCWKdD2y8zyIxmKbbl',
      '0vHhhXkGGV2zF1NsN2EfIr',
      '3tK7XzkTAXZTAsXzodsBYN',
      '2IcjuFPUZISzX2LLhKZJN0',
      '3B1wNOKJcRPNSZwqp8JkFj',
      '5NhqdHEGfM78WWnJARI0iM',
      '4MUF5hjHDYbJF2YtKFp0MI',
      '35cOyocq8Gb6UcT0NWeTwn',
      '3CZmkivge9jnZzWxjm757B',
      '5VfMwt9My7JDyfbxilXjkw',
      '3j8FPquKEOygdUMLLs1Pxr',
      '1CKqhFUeQBruo6X8uCFBiZ',
      '4ZD1VFoJ9LyV65KhPO9TZ5',
      '6ghs7wcpS23FOsDpR8D2MW',
      '6e8Voz3K2vcOsydNtxbwaQ',
    ],
    isPlaying: false,
  },
  () => {},
]);

const MusicPlayerProvider = props => {
  const [state, setState] = useState({
    tracks: [
      '1nnUrCxOSuGhfR0elOI2ZQ',
      '0uuH3Htpahzscc1YSG833Z',
      '5DjNBCWKdD2y8zyIxmKbbl',
      '0vHhhXkGGV2zF1NsN2EfIr',
      '3tK7XzkTAXZTAsXzodsBYN',
      '2IcjuFPUZISzX2LLhKZJN0',
      '3B1wNOKJcRPNSZwqp8JkFj',
      '5NhqdHEGfM78WWnJARI0iM',
      '4MUF5hjHDYbJF2YtKFp0MI',
      '35cOyocq8Gb6UcT0NWeTwn',
      '3CZmkivge9jnZzWxjm757B',
      '5VfMwt9My7JDyfbxilXjkw',
      '3j8FPquKEOygdUMLLs1Pxr',
      '1CKqhFUeQBruo6X8uCFBiZ',
      '4ZD1VFoJ9LyV65KhPO9TZ5',
      '6ghs7wcpS23FOsDpR8D2MW',
      '6e8Voz3K2vcOsydNtxbwaQ',
    ],
    isPlaying: false,
    audioPlayer: new Audio(),
    currentTrackIndex: 0,
  });
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
