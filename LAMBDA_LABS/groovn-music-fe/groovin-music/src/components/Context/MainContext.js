import React, { useState } from 'react';

//Main context object used in the app.
const MainContext = React.createContext({
  currentPlaylist: [],
  currentTrackIndex: 0,
});

//The only provider in the app. Set initial data of a recomened playlist
const MainContextProvider = props => {
  const [state, setState] = useState({
    currentPlaylist: [
      '1nnUrCxOSuGhfR0elOI2ZQ',
      '4ZD1VFoJ9LyV65KhPO9TZ5',
      '5VfMwt9My7JDyfbxilXjkw',
      '6ghs7wcpS23FOsDpR8D2MW',
      '1CKqhFUeQBruo6X8uCFBiZ',
      '3tK7XzkTAXZTAsXzodsBYN',
      '3B1wNOKJcRPNSZwqp8JkFj',
      '6e8Voz3K2vcOsydNtxbwaQ',
      '5DjNBCWKdD2y8zyIxmKbbl',
      '0uuH3Htpahzscc1YSG833Z',
      '2IcjuFPUZISzX2LLhKZJN0',
      '3CZmkivge9jnZzWxjm757B',
      '4MUF5hjHDYbJF2YtKFp0MI',
      '35cOyocq8Gb6UcT0NWeTwn',
      '5NhqdHEGfM78WWnJARI0iM',
      '3j8FPquKEOygdUMLLs1Pxr',
      '0vHhhXkGGV2zF1NsN2EfIr',
    ],
    currentTrackIndex: 0,
  });
  console.log(state);

  return (
    <MainContext.Provider value={[state, setState]}>
      {props.children}
    </MainContext.Provider>
  );
};

export { MainContextProvider, MainContext };
