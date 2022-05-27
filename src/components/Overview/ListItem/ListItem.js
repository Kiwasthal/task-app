import { StyledListItem } from '../../StyledComponents/styledComponents.styles';
import { Component } from 'react';

class ListItem extends Component {
  render() {
    const { text, id, index } = this.props;
    return (
      <StyledListItem key={id}>
        {index + 1}. {text}
      </StyledListItem>
    );
  }
}

export default ListItem;
