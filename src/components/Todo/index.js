import React, { Component } from 'react';
import uuidv4 from 'uuid/v4'
import { Button, Form, Input, Divider } from 'semantic-ui-react'

import TodosList from './TodosList';

class Todo extends Component {

  constructor() {
    super();
    this.state = {
      todoItem: ''
    }
  }

  componentWillMount() {
    this.props.actions.fetchTodos();
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { todoItem } = this.state;
    if(todoItem === null || todoItem === undefined || todoItem === '') {
      return alert('input field value null');
    }
    this.props.actions.addTodo(
      uuidv4(),
      todoItem
    );
    this.setState({
      todoItem: ''
    });
  }

  render() {

    const { todos } = this.props;

    const todosList = todos.todos;    

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Add Todo</label>
            <Input action='Submit' placeholder='Enter todo' name='todoItem' value={this.state.todoItem} onChange={this.handleChange} />
          </Form.Field>
        </Form>
        <Divider horizontal>Todo List</Divider>
        <TodosList todos={todosList} />
      </div>
    );
  }
}

export default Todo;
