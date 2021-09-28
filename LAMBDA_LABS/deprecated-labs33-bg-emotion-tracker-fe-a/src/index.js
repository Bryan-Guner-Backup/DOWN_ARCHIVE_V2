import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';


import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';

import 'antd/dist/antd.less';

import { NotFoundPage } from './components/pages/default-notfound';
import { LoginPage } from './components/pages/default-login';
import { LandingPage } from './components/pages/default-landing';
import { config } from './utils/oktaConfig';
import { LoadingComponent } from './components/common';

// These two routes are for testing
import ClubTable from './components/pages/view-clubdash/ClubTable';
import ProgramTable from './components/pages/view-programdash/ProgramTable';
import { DashGrabContainer } from './components/pages/layout-dashgrab/index';
// this below component is for testing

import MemberTable from './components/pages/view-memberdash/MemberTable';
// -----------

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

  return (
    <Security {...config} onAuthRequired={authHandler}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/implicit/callback" component={LoginCallback} />
        <Route path="/landing" component={LandingPage} />
        {/* test route */}

        <Route path="/member-table" component={MemberTable} />

        <Route path="/club-table" component={ClubTable} />
        <Route path="/program-table" component={ProgramTable} />

        {/* DashGrab will route from here */}

        <SecureRoute
          path="/"
          exact
          component={() => (
            <DashGrabContainer LoadingComponent={LoadingComponent} />
          )}
        />

        <Route component={NotFoundPage} />
      </Switch>
    </Security>
  );
}
