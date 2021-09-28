//libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// redux hooks
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import Filter_forms from './components/Filter_forms';

// reducers
import rootReducer from './state/reducers/combinedReducer';
// import form_reducer from './reducers/graph_reducer';

//components
import Header from './components/Header';
import Loading from './components/Loading';
import About from './components/not_use/common/About';
//CSS styles
import 'antd/dist/antd.less';
import './styles/normalize.css';

// apply redux hooks to react
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

function App() {
  return (
    <>
      <Header />
      <Loading />

      <Router>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
