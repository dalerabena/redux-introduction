import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducer from './reducers';

import App from './containers/App';
import 'semantic-ui-css/semantic.min.css';

const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(reducer, middleware);

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);