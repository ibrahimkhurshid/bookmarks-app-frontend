import styled from "styled-components";

export const StyledIconContainer = styled.div`
  display: inline;
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  size: ${(props) => props.size};
`;
