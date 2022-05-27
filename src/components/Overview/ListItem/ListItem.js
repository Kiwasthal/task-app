import { StyledListItem } from '../../StyledComponents/styledComponents.styles';
import { Component } from 'react';

class ListItem extends Component {
  render() {
    const { text, id } = this.props;
    return <StyledListItem key={id}>{text}</StyledListItem>;
  }
}

export default ListItem;
