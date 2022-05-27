import StyledInputManager from './InputManager.styled';
import AddButton from '../Button/Button';
import TaskInput from '../Input/Input';

import React, { Component } from 'react';

class InputManager extends Component {
  render() {
    return (
      <StyledInputManager>
        <TaskInput />
        <AddButton />
      </StyledInputManager>
    );
  }
}

export default InputManager;
