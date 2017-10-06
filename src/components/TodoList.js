import React, { Component } from 'react';
import { List, Checkbox } from 'semantic-ui-react';

export default class TodoList extends Component {
  render() {

    const { todos } = this.props;

    const mappedTodos = todos.map( item => 
      <List.Item key={item.id} disabled={item.completed}>
        <List.Content floated='right'>
          {/* <Button compact onClick={this.props.handleTodoCompleted.bind(this, item.id)}>Done</Button> */}
          <Checkbox toggle checked={item.completed} onClick={this.props.action.bind(this, item.id)}/>
        </List.Content>
        <List.Content verticalAlign='middle'>
          {item.title}
        </List.Content>
      </List.Item>
    );

    return (
      <List divided verticalAlign='middle'>
        {mappedTodos}   
      </List>
    )
  }
}