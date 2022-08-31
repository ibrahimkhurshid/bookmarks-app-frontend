import React from "react";
import SearchBox from "../searchbar/SearchBox";
import Logo from "../logo/Logo";
import { StyledHeaderBar } from "../../styled-components/StyledHeaderBar";
import { Link } from "react-router-dom";

const Header = ({ searchCallback }) => {
  return (
    <StyledHeaderBar height="45px">
      <Logo name="Bookmarks" />
      <span>
        <Link to="/api">API</Link>
      </span>
      <SearchBox wait={3000} callback={searchCallback} />
    </StyledHeaderBar>
  );
};

export default Header;
