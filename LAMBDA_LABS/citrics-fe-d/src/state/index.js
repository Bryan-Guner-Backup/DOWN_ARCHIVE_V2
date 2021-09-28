import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import currentCityReducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(
  currentCityReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
