import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App.js';
import { createBrowserHistory } from 'history';
import './index.css';

const client = new ApolloClient({
  // client ready to fetch data
  uri: 'https://groovn-backend-prod.herokuapp.com/',
  credentials: 'include',
});

const history = createBrowserHistory();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={history}>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
