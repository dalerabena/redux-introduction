import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';

import App from './components/App';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

it('renders without crashing', () => {
  render(
    <Provider store={store}>    
      <Router>
        <Route component={App} />
      </Router>
    </Provider>
    , document.createElement('root'));
});