import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../images/logo.svg';
import './App.css';
import Todo from '../components/Todo';

import { fetchTodos, todoInit } from '../actions/todosActions';

const mapStoreToProps = (store) => {
  return {
    todos: store.todos.todos
  }
}

class App extends Component {  

  componentWillMount() {
    this.props.dispatch(fetchTodos());
  }

  handleChange = () => {

  }

  render() {

    const { error, fetched, fetching, todos, todo, item } = this.props;

    const mappedTodos = todos.map(item => <p key={item.id}>{item.title}</p>)

    console.log(item);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo List</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/containers/App.js</code> and save to reload.
        </p>

        {/* <form>
          <input type='text' name='todo' value={todo.title} onChange={this.handleChange} />
          <input type='submit' value='Submit' />
        </form> */}

        {mappedTodos}
        
      </div>
    );
  }
}

export default connect(mapStoreToProps)(App);
