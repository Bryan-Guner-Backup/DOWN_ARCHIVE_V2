import React from 'react';

//importing route and redirect to redirect user to login if not autheticated
import { Route, Redirect } from 'react-router-dom';

//Same API as `<Route />
//  spreading in ...rest.
const PrivateRoute = ({ component: Component, ...rest }) => (
  // It renders a `<Route />` and passes all the props through to it.
  <Route
    {...rest}
    render={props =>
      // It checks if the user is authenticated, if they are,
      // it renders the "component" prop. If not, it redirects
      // the user to /login.
      localStorage.getItem('authorization') ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
