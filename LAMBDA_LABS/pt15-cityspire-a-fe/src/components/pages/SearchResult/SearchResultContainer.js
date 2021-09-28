import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import RenderSearchResultPage from './RenderSearchResultPage';

// Here is an example of using our reusable List component to display some list data to the UI.

const SearchResult = () => {
  const { authState } = useOktaAuth();

  return <RenderSearchResultPage />;
};

export default SearchResult;
