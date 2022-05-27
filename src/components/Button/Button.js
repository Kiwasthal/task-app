import { StyledAddBUtton } from '../StyledComponents/styledComponents.styles';
import React, { Component } from 'react';

export default class AddButton extends Component {
  render() {
    const { addTask } = this.props;
    return <StyledAddBUtton onClick={addTask}>ADD</StyledAddBUtton>;
  }
}
