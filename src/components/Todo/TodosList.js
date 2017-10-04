import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

export default class TodosList extends Component {
  render() {

    const { todos } = this.props;

    const mappedTodos = todos.map( item => 
      <List.Item key={item.id}>
        {/* <List.Content floated='right'>
          <Button>Add</Button>
        </List.Content> */}
        <List.Content>
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