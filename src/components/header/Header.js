import React from "react";
import SearchBar from "../searchbar/SearchBar";
import Logo from "../logo/Logo";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Logo name="Bookmarks" />
      <nav>Header</nav>
      <SearchBar />
    </div>
  );
};

export default Header;
