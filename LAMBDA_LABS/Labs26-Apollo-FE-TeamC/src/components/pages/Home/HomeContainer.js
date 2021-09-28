import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import { getCurrentUser } from '../../../state/actions/displayModalAction';
import RenderHomePage from './RenderHomePage';

function HomeContainer({ LoadingComponent }) {
  const dispatch = useDispatch();
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);

  useEffect(() => {
    let isSubscribed = true;

    memoAuthService
      .getUser()
      .then(info => {
        // if user is authenticated we can use the authService to snag some user info.
        // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
        if (isSubscribed) {
          setUserInfo(info);
          dispatch(getCurrentUser(info));
        }
      })
      .catch(err => {
        isSubscribed = false;
        return setUserInfo(null);
      });

    return () => (isSubscribed = false);
    // eslint-disable-next-line
  }, [memoAuthService]);

  return (
    <>
      {authState.isAuthenticated && !userInfo && (
        <LoadingComponent message="Fetching user profile..." />
      )}
      {authState.isAuthenticated && userInfo && (
        <RenderHomePage userInfo={userInfo} authService={authService} />
      )}
    </>
  );
}

export default HomeContainer;
