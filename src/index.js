import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import reducer from './reducers';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import App from './components/App';

import 'semantic-ui-css/semantic.min.css';
import './index.css';


const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(reducer, middleware);

render(
  <Provider store={store}>    
    <Router>
      <Route component={App} />
    </Router>
  </Provider>
  , document.getElementById('root')
);