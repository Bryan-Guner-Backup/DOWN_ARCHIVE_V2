import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { MainContextProvider } from './components/Context/MainContext';
import LandingPage from './components/landingPage/landingPage';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.js';

import './App.css';

// Base level component. There are two routes witch are rendered based on authentication. The main context provider is set us around the rest of the App.

export default function App() {
  return (
    <MainContextProvider>
      <div className="app">
        <Route to exact path="/landing-page" component={LandingPage} />
        <Route exact to="/protected" component={PrivateRoute} />
        <Route path="*" component={NotFound} />
      </div>
    </MainContextProvider>
  );
}
