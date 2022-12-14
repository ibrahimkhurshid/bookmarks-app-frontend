import React from "react";

const Bookmark = ({ props }) => {
  return (
    <>
      <td>{props.id}</td>
      <td>
        <a href={props.url} target="_blank">
          {props.url}
        </a>
      </td>
      <td>{props.title}</td>
    </>
  );
};

export default Bookmark;
