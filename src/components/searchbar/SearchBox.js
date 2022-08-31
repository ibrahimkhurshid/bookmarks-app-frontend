import React from "react";
import { StyledInput } from "../../styled-components/StyledInput";
import { StyledInputContainer } from "../../styled-components/StyledInputContainer";
import { AiOutlineSearch } from "react-icons/ai";
import Icon from "../icons/icon";

const SearchBox = () => {
  return (
    <StyledInputContainer>
      <Icon
        iconComponent={<AiOutlineSearch size="1.5rem" />}
        position="relative"
        top="4px"
        left="35px"
        size="1.5rem"
      ></Icon>
      <StyledInput type="text" placeholder="Search bookmarks"></StyledInput>
    </StyledInputContainer>
  );
};

export default SearchBox;
