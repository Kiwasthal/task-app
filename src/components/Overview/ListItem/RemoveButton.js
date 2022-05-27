import { StyledRemoveButton } from '../../StyledComponents/styledComponents.styles';

import { Component } from 'react';

class RemoveButton extends Component {
  render() {
    const { id, remove } = this.props;
    return (
      <StyledRemoveButton
        onClick={() => {
          remove(id);
        }}
        id={id}
      >
        Remove
      </StyledRemoveButton>
    );
  }
}

export default RemoveButton;
