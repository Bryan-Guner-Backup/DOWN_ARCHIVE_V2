import React from 'react';
import AlbumOfWeek from './AlbumOfWeek.js';
import RecentlyPlayed from './RecentlyPlayed.js';
import Playlists from './Playlists.js';

import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

// const USER_QUERY = gql`
//   query currentUser {
//     currentUser {
//       displayName
//     }
//   }
// `;

// const User = () => {
//   console.log('here');
//   const { loading, error, data } = useQuery(USER_QUERY, {
//     notifyOnNetworkStatusChange: true,
//   });

//   if (loading) {
//     return <div>Loading...</div>;
//   } else if (error) {
//     return <div>{error.message}</div>;
//   }
//   console.log(data);
//   const { displayName } = data.currentUser;

//   return <div>{displayName}</div>;
// };

function HomeMain() {
  return (
    <div className="homeMain-main">
      {/* <User /> */}
      <AlbumOfWeek />
      <RecentlyPlayed />
      <Playlists />
    </div>
  );
}

export default HomeMain;
