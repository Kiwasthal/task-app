import { Component } from 'react';
import { StyledContainer } from '../StyledComponents/styledComponents.styles';
import EditingInput from './EditingListItem/EditingInput';
import RemoveButton from './ListItem/RemoveButton';
import ConfirmEditButton from './EditingListItem/ConfirmEditButton';

export default class EditContainer extends Component {
  render() {
    const { tasks, text, id, index, remove, edit, handleInput } = this.props;
    return (
      <StyledContainer>
        <EditingInput value={text} handleInput={handleInput} />
        <ConfirmEditButton />
        <RemoveButton />
      </StyledContainer>
    );
  }
}
