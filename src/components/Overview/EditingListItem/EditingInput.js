import { StyledEditInput } from '../../StyledComponents/styledComponents.styles';
import { Component } from 'react';

export class EditingInput extends Component {
  render() {
    const { handleInput } = this.props;
    return <StyledEditInput onChange={handleInput} />;
  }
}

export default EditingInput;
