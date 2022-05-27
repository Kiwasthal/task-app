import { StyledInputManager } from '../StyledComponents/styledComponents.styles';
import AddButton from '../Button/Button';
import TaskInput from '../Input/Input';
import React, { Component } from 'react';

class InputManager extends Component {
  render() {
    const { handleInput, addTask } = this.props;
    return (
      <StyledInputManager>
        <TaskInput handleInput={handleInput} />
        <AddButton addTask={addTask} />
      </StyledInputManager>
    );
  }
}

export default InputManager;
