import styled from 'styled-components';

const StyledAddBUtton = styled.button`
  border: 2px solid #4ade80;
  background-color: #4ade80;
  color: #fff;
  padding: 10px 26px;
  text-align: center;
  text-decoration: none;
  display: inline-block;

  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
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

const StyledInputManager = styled.div`
  padding: 20px;
  background-color: #fff;
  border: 2px solid #ddd;
  grid-area: inputManager;
  display: flex;
  align-self: flex-end;
`;

const StyledOverview = styled.div`
  background-color: #fff;
  border: 2px solid #ddd;
  border-top: none;
  grid-area: taskDisplay;
  display: flex;
  flex-direction: column;
  justify-items: space-evenly;
  align-items: center;
`;

const StyledListItem = styled.li`
  margin-top: 4px;
  font-size: 24px;
  color: #4ade80;
  font-size: 18px;
  font-weight: 500;
  padding: 5px;
  list-style-type: none;
  width: 90%;
  border: 2px solid #ddd;
  height: 5%;
  display: flex;
  align-items: center;
`;

export {
  StyledAddBUtton,
  StyledInput,
  StyledInputManager,
  StyledOverview,
  StyledListItem,
};
