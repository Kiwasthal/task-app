import ListItem from './ListItem/ListItem';
import { RemoveButton } from '../StyledComponents/styledComponents.styles';
import { Component } from 'react';
import { EditButton } from '../StyledComponents/styledComponents.styles';
import { StyledContainer } from '../StyledComponents/styledComponents.styles';

export default class TaskContainer extends Component {
  render() {
    const { text, id } = this.props;
    return (
      <StyledContainer>
        <ListItem text={text} id={id} />
        <EditButton>Edit</EditButton>
        <RemoveButton>Remove</RemoveButton>
      </StyledContainer>
    );
  }
}
