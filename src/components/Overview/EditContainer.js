import { Component } from 'react';
import { StyledContainer } from '../StyledComponents/styledComponents.styles';
import EditingInput from './EditingListItem/EditingInput';
import RemoveButton from './ListItem/RemoveButton';
import ConfirmEditButton from './EditingListItem/ConfirmEditButton';

export default class EditContainer extends Component {
  render() {
    const { text, id, index, remove, handleInput, confirmEdit } = this.props;
    return (
      <StyledContainer>
        <EditingInput value={text} handleInput={handleInput} />
        <ConfirmEditButton id={id} confirmEdit={confirmEdit} />
        <RemoveButton id={id} remove={remove} />
      </StyledContainer>
    );
  }
}
