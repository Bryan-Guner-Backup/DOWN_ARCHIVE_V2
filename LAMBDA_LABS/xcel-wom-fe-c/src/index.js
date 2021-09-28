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
import { NotFoundPage } from './components/pages/NotFound';
import { WorkOrder } from './components/pages/WorkOrder';
import { Dashboard } from './components/pages/Dashboard';
import { config } from './utils/oktaConfig';
import { LoadingComponent } from './components/common';
import { LandingPage } from './components/pages/Landing';
import { LoginPage } from './components/pages/Login';

//Redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './state/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
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
      <Router>
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route path="/login" render={() => <LoginPage />} />
          <Route path="/implicit/callback" render={() => <LoginCallback />} />

          {/* any of the routes you need secured should be registered as SecureRoutes */}
          <SecureRoute
            path="/dashboard"
            exact
            component={() => <Dashboard LoadingComponent={LoadingComponent} />}
          />
          <SecureRoute
            path="/dashboard/workOrder"
            exact
            component={() => <WorkOrder LoadingComponent={LoadingComponent} />}
          />

          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Security>
  );
}
