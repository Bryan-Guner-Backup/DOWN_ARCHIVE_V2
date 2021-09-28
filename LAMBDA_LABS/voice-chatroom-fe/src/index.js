import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import OktaConfig from './components/utils/OktaConfig';
import { Security } from '@okta/okta-react';


// Redux & Store
import { Provider } from 'react-redux';
import store from '../src/utils/store';

const AppWithProvider = (
  <Provider store={store}>
    <React.StrictMode>
      <Security {...OktaConfig}>  
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Security>
    </React.StrictMode>
  </Provider>
)

ReactDOM.render(AppWithProvider, document.getElementById('root'));

