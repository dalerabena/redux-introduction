import React, { Component } from 'react'; 
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { bindActionCreators }  from 'redux';
import * as TodoActions from '../../actions/todoActions';

import Footer from '../Footer';
import Navigation from '../Navigation';

import Click from '../Click';
import Hello from '../Hello';
import Todo from '../Todo';

class App extends Component {

  componentDidMount() {
    this.props.todoActions.fetchTodos();
  }

  render() {
    return (
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
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  todoActions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
