import styled from "styled-components";

export const StyledNamedLogo = styled.a`
  display: inline;
  font-family: "Courier";
  font-size: 2.5rem;
  font-weight: bold;
  color: ${(props) => props.color};
  :link {
    text-decoration: none;
  }
`;
