import styled from "styled-components";

export const StyledInput = styled.input`
  font-size: 1.2rem;
  font-family: "Courier New", Courier, monospace;
  font-weight: lighter;
  width: fit-content;
  padding: 0.5rem;
  padding-left: 2.5rem;
  border-style: none;
  border-radius: 50px;
  outline: none;
  color: pink;
  background-color: #ebedf0;
  box-sizing: border-box;
  color: green;
  ::placeholder {
    color: grey;
  }

  :focus {
    ::placeholder {
      color: rgb(200, 200, 200);
    }
  }
  :hover {
    background-color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  :focus {
    color: grey;
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;
