import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Container, Image } from 'semantic-ui-react';

export default class Navigation extends Component {
  render() {
    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' href='/' header>
            <Image
              size='mini'
              src='https://react.semantic-ui.com/logo.png'
              style={{ marginRight: '1.5em' }}
            />
            Redux
          </Menu.Item>
          <Menu.Item as='a' href='/todo'>Todo</Menu.Item>
          <NavLink to='/todo'>Todo</NavLink>
        </Container>
      </Menu>
    );
  }
}