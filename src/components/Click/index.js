import React, { Component } from 'react';

export default class Click extends Component {
  render() {

    const { clicks, actions } = this.props;

    return (
      <div>
        <p className="App-intro">
          Clicks: <strong>{clicks}</strong>
        </p>

        <button onClick={actions.incrementClick.bind(this)}>Increment</button>&nbsp;
        <button onClick={actions.decrementClick.bind(this)}>Decrement</button>&nbsp;
        <button onClick={actions.resetClick.bind(this)}>Reset</button>&nbsp;
      </div>
    );
  }
}