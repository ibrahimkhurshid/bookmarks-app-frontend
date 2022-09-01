import React from "react";
import { StyledInput } from "../../styled-components/StyledInput";
import { StyledInputContainer } from "../../styled-components/StyledInputContainer";
import { AiOutlineSearch } from "react-icons/ai";
import Icon from "../icons/icon";

const SearchBox = ({ method }) => {
  return (
    <StyledInputContainer>
      <Icon
        iconComponent={<AiOutlineSearch size="1.5rem" />}
        position="relative"
        top="4px"
        left="35px"
        size="1.5rem"
      ></Icon>
      <StyledInput
        type="text"
        placeholder="Search bookmarks"
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            method(e.target.value);
          } else {
            console.log("non enter");
          }
        }}
      ></StyledInput>
    </StyledInputContainer>
  );
};

export default SearchBox;
