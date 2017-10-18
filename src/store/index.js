import { applyMiddleware, createStore } from 'redux';

import reducer from '../reducers';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(promise(), thunk, logger);

const store = createStore(reducer, middleware);

export default store;