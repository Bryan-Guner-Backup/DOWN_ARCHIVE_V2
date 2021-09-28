import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import BudgetsForm from './BudgetsForm';
import { getBudgetGoal } from '../../../api';
import Budgets from './Budgets';
import Nav from '../Nav/Nav';

function BudgetsContainer({ LoadingComponent }) {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);
  const [addedBudget, setAddedBudget] = useState(null);
  useEffect(async () => {
    let isSubscribed = true;
    try {
      const info = await memoAuthService.getUser();
      // if user is authenticated we can use the authService to snag some user info.
      // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
      if (isSubscribed) {
        setUserInfo(info);
      }
      const response = await getBudgetGoal(
        process.env.REACT_APP_API_URI + 'data/budgetGoal',
        authState,
        info
      );
      console.log(response);
      setAddedBudget(response);
    } catch (err) {
      isSubscribed = false;
      setAddedBudget({ data: null, err });
      return setUserInfo(null);
    }

    return () => (isSubscribed = false);
  }, [memoAuthService]);
  if (addedBudget === null) {
    return (
      <>
        <Nav authService={authService} />
        {authState.isAuthenticated && userInfo && (
          <BudgetsForm
            userInfo={userInfo}
            url={process.env.REACT_APP_API_URI + 'data/futureBudget'}
            authState={authState}
          />
        )}
      </>
    );
  }
  return (
    <>
      {authState.isAuthenticated && !userInfo && (
        <LoadingComponent message="Fetching user profile..." />
      )}
      {authState.isAuthenticated && userInfo && (
        <>
          <Nav authService={authService} />
          <Budgets
            userInfo={userInfo}
            authService={authService}
            url={process.env.REACT_APP_API_URI + 'data/futureBudget'}
            authState={authState}
            added
          />
        </>
      )}
    </>
  );
}
export default BudgetsContainer;
