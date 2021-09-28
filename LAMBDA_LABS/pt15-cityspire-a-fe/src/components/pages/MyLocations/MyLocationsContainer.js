import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import RenderMyLocationsPage from './RenderMyLocationsPage';

const MyLocations = () => {
  const { authState } = useOktaAuth();

  return <RenderMyLocationsPage />;
};

export default MyLocations;
