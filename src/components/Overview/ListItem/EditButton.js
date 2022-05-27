import { StyledEditButton } from '../../StyledComponents/styledComponents.styles';

import { Component } from 'react';

class EditButton extends Component {
  render() {
    const { tasks, id, edit } = this.props;
    return <StyledEditButton onClick={() => edit(id)}>Edit</StyledEditButton>;
  }
}

export default EditButton;
