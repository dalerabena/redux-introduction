import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';

export default class Hello extends Component {
  render() {
    return (
      <div>
        <Header as='h1'>Semantic UI React Fixed Template</Header>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>A text container is used for the main container, which is useful for single column layouts.</p>

        <Image src='https://react.semantic-ui.com/assets/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='https://react.semantic-ui.com/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='https://react.semantic-ui.com/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='https://react.semantic-ui.com/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='https://react.semantic-ui.com/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='https://react.semantic-ui.com/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='https://react.semantic-ui.com/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      </div>
    );
  }
}