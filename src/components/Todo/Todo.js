import React, { Component } from 'react'; 
import { bindActionCreators }  from 'redux';
import { connect } from 'react-redux';
import { Form, Input, Divider } from 'semantic-ui-react';
import uuidv4 from 'uuid/v4';

import TodosList from './TodoList';

import * as TodoActions from '../../actions/todoActions';

class Todo extends Component {

  constructor() {
    super();
    this.state = {
      todoItem: '',
      fieldError: false,
    }
  }

  // componentWillMount() {
  //   this.props.actions.fetchTodos();
  // }

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
      this.setState({
        fieldError: true
      });
    } else {
      this.props.actions.addTodo(
        uuidv4(),
        todoItem
      );
      this.setState({
        todoItem: '',
        fieldError:false
      });
    }
  }

  handleTodoCompleted = (id) => {
    this.props.actions.completedTodo(id);
  }

  render() {

    const { todos } = this.props;
    const todosList = todos.todos;

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field error={this.state.fieldError}>
            <label>Add Todo</label>
            <Input action='Submit' placeholder='Enter todo' name='todoItem' value={this.state.todoItem} onChange={this.handleChange} />
          </Form.Field>
        </Form>
        <Divider horizontal>Todo List</Divider>
        <TodosList todos={todosList} action={this.handleTodoCompleted} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
