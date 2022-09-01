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
    padding: 0px 2rem;
    font-family: "helvetica", "sans-serif";
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    :hover {
      color: rgb(0, 0, 0);
      font-family: "helvetica", "sans-serif";
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
