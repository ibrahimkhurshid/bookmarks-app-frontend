import React, { useState } from "react";
import SearchBox from "../searchbar/SearchBox";
import Logo from "../logo/Logo";
import { StyledHeaderBar } from "../../styled-components/StyledHeaderBar";
import { Link } from "react-router-dom";

const Header = ({ method }) => {
  return (
    <StyledHeaderBar height="45px">
      <Logo name="Bookmarks" />
      <span>
        <Link to="/api">API</Link>
      </span>
      <SearchBox wait={3000} method={method} />
    </StyledHeaderBar>
  );
};

export default Header;
