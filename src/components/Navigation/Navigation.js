import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container, Image } from 'semantic-ui-react';

export default class Navigation extends Component {
  render() {
    return (
      <Menu fixed='top' inverted>
        <Container>
          <Link to="/" className="header item">
            <Image
              size='mini'
              src='https://react.semantic-ui.com/logo.png'
              style={{ marginRight: '1.5em' }}
            />
            React App
          </Link>
          <Link to="/todo" className="item">Todo</Link>
          <Link to="/click" className="item">Click</Link>  
        </Container>
      </Menu>
    );
  }
}