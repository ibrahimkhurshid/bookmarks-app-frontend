import React from "react";
import { StyledNamedLogo } from "../../styled-components/StyledNamedLogo";

const Logo = ({ name }) => {
  return (
    <StyledNamedLogo color="pink" href="/">
      {name}
    </StyledNamedLogo>
  );
};

export default Logo;
