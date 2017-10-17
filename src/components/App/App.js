import React from 'react'; 
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Footer from '../Footer';
import Navigation from '../Navigation';

import Click from '../Click';
import Hello from '../Hello';
import Todo from '../Todo';

const App = () => (
  <div className='Site'>
    <Navigation />
      <Container text style={{ marginTop: '7em' }} className='Site-content'>
        <Route exact path="/" component={Hello} />
        <Route path="/todo" component={Todo} />
        <Route path="/click" component={Click} />
      </Container>
    <Footer />
  </div> 
);

export default connect()(App);
