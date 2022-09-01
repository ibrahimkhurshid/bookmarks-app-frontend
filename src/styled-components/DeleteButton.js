import styled from "styled-components";

export const DeleteButton = styled.button`
  color: red;
  background-color: rgb(248, 248, 248);
  outline: none;
  border-style: none;
  border: 1px solid rgb(250, 50, 50);
  border-radius: 50px;
  :hover {
    color: white;
    background-color: rgb(250, 100, 100);
  }
  :active {
    color: white;
    background-color: rgb(250, 50, 50);
    border: 1px solid black;
  }
`;
