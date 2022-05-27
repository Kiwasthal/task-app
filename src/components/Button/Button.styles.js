import styled from 'styled-components';

const StyledAddBUtton = styled.button`
  border: 2px solid #4ade80;
  background-color: #4ade80;
  color: #fff;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #fff;
    color: #4ade80;
  }
  &:active {
    transform: translateY(4px);
  }
`;

export default StyledAddBUtton;
