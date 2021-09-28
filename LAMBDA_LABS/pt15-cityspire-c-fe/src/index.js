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

import { NotFoundPage } from './components/notFound/components';
import { ExampleListPage } from './components/exampleList/components';
import Home from './components/home/pages/Home';
import { ProfileListPage } from './components/profileList/components';
import { LoginPage } from './components/login/components';
import { ExampleDataViz } from './components/exampleDataViz/components';
import { config } from './utils/oktaConfig';
import { LoadingComponent } from './components/common';
import { LandingPage } from './components/landing/components';
import Dashboard from './components/dashboard/pages/Dashboard';

import { ContextProvider } from './state/contexts';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ContextProvider>
        <App />
      </ContextProvider>
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
        <Route path="/" exact component={LandingPage} />
        {/* any of the routes you need secured should be registered as SecureRoutes */}
        <SecureRoute
          path="/home"
          component={() => <Home LoadingComponent={LoadingComponent} />}
        />
        <SecureRoute path="/dashboard" component={Dashboard} />
        <SecureRoute path="/example-list" component={ExampleListPage} />

        <SecureRoute path="/profile-list" component={ProfileListPage} />
        <SecureRoute path="/datavis" component={ExampleDataViz} />
        <Route component={NotFoundPage} />
      </Switch>
    </Security>
  );
}
