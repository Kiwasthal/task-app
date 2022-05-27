import { StyledListItem } from '../../StyledComponents/styledComponents.styles';
import { Component } from 'react';

class ListItem extends Component {
  render() {
    const { text } = this.props;
    return <StyledListItem>{text}</StyledListItem>;
  }
}

export default ListItem;
