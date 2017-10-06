import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { Container } from 'semantic-ui-react';


import App from './containers/App';
import TodoPage from './containers/TodoPage';

import Footer from './components/Footer';
import Navigation from './components/Navigation';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(reducer, middleware);

render(
  <Provider store={store}>    
    <Router>
      <div className='Site'>
        <Navigation />
        <Container text style={{ marginTop: '7em' }} className='Site-content'>

          <Route exact path='/' component={App} />
          <Route path='/todo' component={TodoPage} />

        </Container>
        <Footer />
      </div>      
    </Router>
  </Provider>
  , document.getElementById('root')
);