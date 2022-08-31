import React from "react";
import { Link } from "react-router-dom";
import { StyledNamedLogo } from "../../styled-components/StyledNamedLogo";

const Logo = ({ name }) => {
  return (
    <StyledNamedLogo color="pink" href="/">
      <Link to={"/"}>{name}</Link>
    </StyledNamedLogo>
  );
};

export default Logo;
