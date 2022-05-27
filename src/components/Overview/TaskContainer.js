import ListItem from './ListItem/ListItem';
import { Component } from 'react';
import { StyledContainer } from '../StyledComponents/styledComponents.styles';
import RemoveButton from './ListItem/RemoveButton';
import EditButton from './ListItem/EditButton';

export default class TaskContainer extends Component {
  render() {
    const { text, id, index, remove, edit} = this.props;
    return (
      <StyledContainer>
        <ListItem text={text} id={id} index={index} />
        <EditButton id={id} edit={edit} />
        <RemoveButton id={id} remove={remove}  />
      </StyledContainer>
    );
  }
}
