import React from 'react';
import { Redirect } from 'react-router-dom';

import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import HomePage from '../Home/Homepage.js';

const USER_QUERY = gql`
  query currentUser {
    currentUser {
      displayName
    }
  }
`;

function PrivateRoute() {
  const { loading, error, data } = useQuery(USER_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error.message}</div>;
  }

  console.log(data);
  const { currentUser } = data;

  if (currentUser !== null) {
    return <HomePage />;
  } else {
    console.log('redirect to Login');
    return <Redirect to="/landing-page" />;
  }
}

export default PrivateRoute;
