import { StyledInput } from '../StyledComponents/styledComponents.styles';
import React, { Component } from 'react';

export class TaskInput extends Component {
  render() {
    const { handleInput } = this.props;
    return <StyledInput onChange={handleInput} />;
  }
}

export default TaskInput;
