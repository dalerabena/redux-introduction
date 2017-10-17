import React, { Component } from 'react';
import { Segment, Button, Header } from 'semantic-ui-react';
import { bindActionCreators }  from 'redux';
import { connect } from 'react-redux';

import * as ClickActions from '../../actions/clickActions';

class Click extends Component {

  handlePlus = () => {
    this.props.actions.incrementClick();
  }

  handleMinus = () => {
    this.props.actions.decrementClick();
  }

  handleReset = () => {
    this.props.actions.resetClick();
  }

  render() {
    return (
      <Segment textAlign='center'>
        <Header size='huge'>{this.props.clicks}</Header>
        <br/>
        <Button content='Plus' icon='plus' labelPosition='left' onClick={this.handlePlus}/ >
        <Button content='Minus' icon='minus' labelPosition='right' onClick={this.handleMinus} />
        <Button content='Reset' icon='remove' labelPosition='right' onClick={this.handleReset} />
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  clicks: state.clicks
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ClickActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Click);
