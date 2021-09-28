import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { user } from '../utils/helpers';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem('token') !== null) {
          return <Component {...props} />;
        } else {
          return <Redirect to='/signin' />;
        }
      }}
    />
  );
};
