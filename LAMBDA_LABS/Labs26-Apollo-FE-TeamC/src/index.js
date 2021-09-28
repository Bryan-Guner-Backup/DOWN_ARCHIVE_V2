import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import newTopicReducer from './state/reducers/newTopicReducer';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';

import 'antd/dist/antd.less';

import { NotFoundPage } from './components/pages/NotFound';
import { ProfileListPage } from './components/pages/ProfileList';
import { LoginPage } from './components/pages/Login';
import { HomePage } from './components/pages/Home';
import { config } from './utils/oktaConfig';
import { LoadingComponent } from './components/common';
import NewTopicModalContainer from './components/pages/NewTopicModal/NewTopicModalContainer';
import Navigation from './components/Navigation/Navigation';
import { TopicsListContainer } from './components/TopicsList';
import { JoinCodeModalContainer } from './components/JoinCodeModal';
import { JoinSurveyModalContainer } from './components/JoinSurveyModal/JoinSurveyModalContainer';

const store = createStore(newTopicReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
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
      <Navigation />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/implicit/callback" component={LoginCallback} />
        {/* any of the routes you need secured should be registered as SecureRoutes */}
        <SecureRoute
          path="/"
          exact
          component={() => <HomePage LoadingComponent={LoadingComponent} />}
        />
        <SecureRoute path="/profile-list" component={ProfileListPage} />
        <SecureRoute path="/topics-list" component={TopicsListContainer} />

        <Route component={NotFoundPage} />
      </Switch>
      <NewTopicModalContainer />
      <JoinCodeModalContainer />
      <JoinSurveyModalContainer />
    </Security>
  );
}
