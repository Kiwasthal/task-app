import { StyledRemoveButton } from '../../StyledComponents/styledComponents.styles';

import { Component } from 'react';

class RemoveButton extends Component {
  render() {
    const { tasks, id, remove } = this.props;
    return (
      <StyledRemoveButton
        onClick={() => {
          console.log(remove);
          remove(id);
          console.log(tasks[0].id === id);
        }}
        id={id}
      >
        Remove
      </StyledRemoveButton>
    );
  }
}

export default RemoveButton;
