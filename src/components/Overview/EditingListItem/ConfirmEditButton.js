import { Component } from 'react';
import { StyledConfirmEditButton } from '../../StyledComponents/styledComponents.styles';

class ConfirmEditButton extends Component {
  render() {
    const { confirmEdit, id } = this.props;
    return (
      <StyledConfirmEditButton onClick={e => confirmEdit(e, id)}>
        Confirm
      </StyledConfirmEditButton>
    );
  }
}

export default ConfirmEditButton;
