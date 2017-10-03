import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../images/logo.svg';
import './App.css';
import Todo from '../components/Todo';

import { fetchTodos } from '../actions/todosActions';
import * as clicks from '../actions/clicksActions';

const mapStoreToProps = (store) => {
  return {
    todos: store.todos.todos,
    clicks: store.clicks
  }
}

class App extends Component {  

  componentWillMount() {
    this.props.dispatch(fetchTodos());
  }

  incrementClick() {
    this.props.dispatch(clicks.incrementClick());
  }

  decrementClick() {
    this.props.dispatch(clicks.decrementClick());
  }

  resetClick() {
    this.props.dispatch(clicks.resetClick());
  }

  render() {

    const { todos, clicks } = this.props;

    const mappedTodos = todos.map(item => <p key={item.id}>{item.title}</p>)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo List</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/containers/App.js</code> and save to reload.
        </p> */}

        <p className="App-intro">
          Clicks: <strong>{clicks}</strong>
        </p>

        <button onClick={this.incrementClick.bind(this)}>Increment</button>&nbsp;
        <button onClick={this.decrementClick.bind(this)}>Decrement</button>&nbsp;
        <button onClick={this.resetClick.bind(this)}>Reset</button>&nbsp;

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
