import styled from 'styled-components';

const StyledInput = styled.input`
  border: 2px solid #4ade80;
  background-color: #fff;
  color: #4ade80;
  padding: 10px 22px;
  font-size: 24px;
  transition: all 0.2s ease-in;
  &:focus {
    border-radius: 20px;
    outline: none;
    border: 2px solid #a3e635;
  }
`;

export default StyledInput;
