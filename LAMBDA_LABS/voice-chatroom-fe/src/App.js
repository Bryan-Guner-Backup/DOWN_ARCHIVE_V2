import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { SecureRoute, LoginCallback } from "@okta/okta-react";
import OktaConfig from "./components/utils/OktaConfig";

import './sass/global.scss';

import VerifyUser from './components/pages/VerifyUser';
import Header from './components/pages/Header';
import HomePage from './components/pages/HomePage';
import Dashboard from './components/pages/Dashboard';
import MentorRegistration from './components/pages/MentorRegistration'

function App() {

  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path={OktaConfig.callbackPath} component={LoginCallback} />
        {/* <SecureRoute exact path="/dashboard" component={VerifyUser} /> */}
        <SecureRoute path='/dashboard' component={Dashboard} />
        <Route path='/mentor-registration' component={MentorRegistration} />
      </Router>
    </div>
  );
}

export default App;
