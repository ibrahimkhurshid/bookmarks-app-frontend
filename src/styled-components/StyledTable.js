import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
  font-family: "Courier New", Courier, monospace;
  max-height: 70vh;
  table-layout: fixed;
  overflow-y: scroll;
  display: block;

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
    color: rgb(100, 100, 250);
  }

  thead {
    height: 30px;
    background-color: white;
    top: 0;
    position: sticky;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }

  td {
    border: 1px solid rgb(251, 251, 251);
    padding: 8px;
    font-size: 1rem;
  }

  tr {
    color: rgb(100, 100, 100);
    box-sizing: border-box;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    :hover {
      color: rgb(0, 0, 0);
      /* font-family: "helvetica", "sans-serif"; */
      border-radius: 20px;
    }
  }

  tr :nth-child(6),
  svg {
    width: 1.5rem;
    height: 1.5rem;
    text-align: center;
    padding: 0px;
    :hover {
      color: black;
    }
  }
`;
