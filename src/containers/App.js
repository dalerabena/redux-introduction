import React from 'react'; 
import { bindActionCreators }  from 'redux';
import { connect } from 'react-redux';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'

import * as ClickActions from '../actions/clickActions';
import * as TodoActions from '../actions/todoActions';

import Todo from '../components/Todo';
// import Click from '../components/Click';

const App = ({clicks, clickActions, todos, todoActions}) => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image
            size='mini'
            src='https://react.semantic-ui.com/logo.png'
            style={{ marginRight: '1.5em' }}
          />
          React App
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>
      </Container>
    </Menu>

    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Todos</Header>
      <Todo todos={todos} actions={todoActions} />
    </Container>

    <Segment
      inverted
      vertical
      style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
    >
      <Container textAlign='center'>        
        <List horizontal inverted divided link>
          <List.Item as='a' href='#'>Site Map</List.Item>
          <List.Item as='a' href='#'>Contact Us</List.Item>
          <List.Item as='a' href='#'>Terms and Conditions</List.Item>
          <List.Item as='a' href='#'>Privacy Policy</List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)

const mapStateToProps = state => ({
  todos: state.todos,
  clicks: state.clicks
})

const mapDispatchToProps = dispatch => ({
  clickActions: bindActionCreators(ClickActions, dispatch),
  todoActions: bindActionCreators(TodoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
