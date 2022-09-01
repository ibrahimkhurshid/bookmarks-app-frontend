import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;

  top: ${(props) => `${props.loc.y}px`};
  left: ${(props) => `${props.loc.x - 150}px`};
  z-index: 3;
  border: 2px solid black;
  border-radius: 5px;
  padding: 20px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;
