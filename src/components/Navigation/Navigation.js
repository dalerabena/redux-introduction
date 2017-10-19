import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container, Image } from 'semantic-ui-react';

import logo from '../../images/logo.svg';

export default class Navigation extends Component {
  render() {
    return (
      <Menu fixed='top' inverted>
        <Container>
          <Link to="/react-introduction" className="header item">
            <Image
              size='mini'
              src={logo}
              style={{ marginRight: '1em' }}
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