import { StyledInputManager } from '../StyledComponents/styledComponents.styles';
import { StyledForm } from '../StyledComponents/styledComponents.styles';
import AddButton from '../Button/Button';
import TaskInput from '../Input/Input';
import { Component } from 'react';

class InputManager extends Component {
  render() {
    const { handleInput, addTask } = this.props;
    return (
      <StyledInputManager>
        <form action="#" style={{ display: 'flex' }}>
          <TaskInput handleInput={handleInput} />
          <AddButton addTask={addTask} />
        </form>
      </StyledInputManager>
    );
  }
}

export default InputManager;
