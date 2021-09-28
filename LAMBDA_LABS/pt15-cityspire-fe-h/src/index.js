import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';

import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import 'antd/dist/antd.less';

// import { NotFoundPage } from './components/pages/NotFound';
import { ExampleListPage } from './components/pages/ExampleList';
// import { HomePage } from './components/pages/Home';
import { LandingPage } from './components/pages/Landing';
import { ProfileListPage } from './components/pages/ProfileList';
import { LoginPage } from './components/pages/Login';
import { ExampleDataViz } from './components/pages/ExampleDataViz';
import { config } from './utils/oktaConfig';
// eslint-disable-next-line no-unused-vars
import { LoadingComponent } from './components/common';
import { Navbar } from './components/common/Navbar';
import { MapPage } from './components/pages/MapPage';
import SearchBar from './components/common/Searchbar/SearchBar';
import { LocationContext } from './state/contexts';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };

  const [location, setLocation] = useState({});

  return (
    <Security {...config} onAuthRequired={authHandler}>
      <Navbar />

      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/implicit/callback" component={LoginCallback} />

        {/* any of the routes you need secured should be registered as SecureRoutes */}
        <SecureRoute
          path="/"
          exact
          component={() => <LandingPage LoadingComponent={LoadingComponent} />}
        />
        <SecureRoute path="/example-list" component={ExampleListPage} />

        <SecureRoute path="/profile-list" component={ProfileListPage} />
        <SecureRoute path="/datavis" component={ExampleDataViz} />

        <LocationContext.Provider value={{ location, setLocation }}>
          <Route path="/map" component={MapPage} />
          <Route path="/search" component={SearchBar} />
        </LocationContext.Provider>

        {/* <Route component={NotFoundPage} />      */}
      </Switch>
    </Security>
  );
}
