import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import './resources/fonts/Lato/Lato-Regular.ttf'
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
