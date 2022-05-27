import ListItem from './ListItem/ListItem';
import { Component } from 'react';
import { StyledEditButton } from '../StyledComponents/styledComponents.styles';
import { StyledContainer } from '../StyledComponents/styledComponents.styles';
import RemoveButton from './ListItem/RemoveButton';

export default class TaskContainer extends Component {
  render() {
    const { tasks, text, id, index, remove } = this.props;
    return (
      <StyledContainer>
        <ListItem text={text} id={id} index={index} />
        <StyledEditButton>Edit</StyledEditButton>
        <RemoveButton tasks={tasks} id={id} remove={remove} />
      </StyledContainer>
    );
  }
}
