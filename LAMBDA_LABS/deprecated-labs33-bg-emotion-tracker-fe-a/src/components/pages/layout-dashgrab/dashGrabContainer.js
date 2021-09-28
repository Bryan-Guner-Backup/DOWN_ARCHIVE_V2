import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { DashGrab } from './index';
import { getUserData } from '../../../api';

function DashGrabContainer({ LoadingComponent }) {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

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
        }
      })
      .catch(err => {
        isSubscribed = false;
        return setUserInfo(null);
      });
    return () => (isSubscribed = false);
  }, [memoAuthService]);

  useEffect(() => {
    if (userInfo) {
      getUserData('/users/getuserinfo', authState)
        .then(res => {
          setLoggedInUser(res);
        })
        .catch(err => console.log(err));
    }
  }, [userInfo]);

  return (
    <>
      {authState.isAuthenticated && !userInfo && !loggedInUser && (
        <LoadingComponent message="Fetching user profile..." />
      )}
      {authState.isAuthenticated && userInfo && loggedInUser && (
        <DashGrab
          userInfo={userInfo}
          authService={authService}
          loggedInUser={loggedInUser}
        />
      )}
    </>
  );
}

export default DashGrabContainer;
