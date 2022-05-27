import { StyledAddButton } from '../StyledComponents/styledComponents.styles';
import { Component } from 'react';

export default class AddButton extends Component {
  render() {
    const { addTask } = this.props;
    return (
      <StyledAddButton onClick={addTask} type="submit">
        ADD
      </StyledAddButton>
    );
  }
}
