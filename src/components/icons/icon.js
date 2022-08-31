import React from "react";
import { StyledIconContainer } from "../../styled-components/icon";

const Icon = ({ iconComponent, position, top, left, size }) => {
  return (
    <StyledIconContainer size={size} position={position} top={top} left={left}>
      {iconComponent}
    </StyledIconContainer>
  );
};

export default Icon;
