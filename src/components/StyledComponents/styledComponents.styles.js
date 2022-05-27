import styled from 'styled-components';

const StyledAddButton = styled.button`
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

const StyledRemoveButton = styled(StyledAddButton)`
  padding: 6px 14px;
  background-color: #ef4444;
  font-size: 13px;
`;

const StyledEditButton = styled(StyledAddButton)`
  padding: 6px 4px;
  border-color: #5eead4;
  background-color: #2dd4bf;
  font-size: 13px;
`;

const StyledInput = styled.input`
  border: 2px solid #4ade80;
  background-color: #fff;
  color: #4ade80;
  padding: 10px 22px;
  font-size: 24px;
  transition: all 0.2s ease-in;
  &::placeholder {
    color: #4ade80;
    transition: all 0.2s ease-in;
  }
  &:focus {
    background-color: #f7fee7;
    border-radius: 20px;
    outline: none;
    border: 2px solid #a3e635;
    &::placeholder {
      color: #a3e635;
    }
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
  font-size: 24px;
  color: #4ade80;
  font-size: 18px;
  font-weight: 500;
  padding: 5px;
  list-style-type: none;
  width: 90%;
  border: 2px solid #ddd;
  display: flex;
  align-items: center;
`;

const StyledContainer = styled.div`
  display: grid;
  width: 90%;
  margin-top: 10px;

  overflow: hidden;
  align-items: center;
  grid-template-columns: 60% auto auto;
`;

export {
  StyledAddButton,
  StyledInput,
  StyledInputManager,
  StyledOverview,
  StyledListItem,
  StyledRemoveButton,
  StyledEditButton,
  StyledContainer,
};
