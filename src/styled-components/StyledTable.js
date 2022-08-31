import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
  font-family: "Courier New", Courier, monospace;
  max-height: 450px;
  table-layout: fixed;
  overflow-y: scroll;
  display: block;
  max-width: 100%;
  border-left: 3px solid red;
  border-right: 3px solid red;

  a:visited {
    color: #333;
  }

  a:active {
    color: #333;
  }

  a:link {
    color: #333;
  }

  a:hover {
    color: #333;
  }

  caption {
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    color: #333;
  }

  thead {
    height: 30px;
    background-color: pink;
    top: 0;
    position: sticky;
    border-radius: 50px;
  }

  td {
    border: 1px solid rgb(231, 231, 231);
    padding: 8px;
  }
`;
