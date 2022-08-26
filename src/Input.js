import React, { useEffect, useState } from "react";

const Input = (props) => {
  const { createCallback } = props;
  const [text, setText] = useState("%");

  return (
    <div>
      <input
        onKeyUp={(e) => {
          if (e.key == "Enter") {
            createCallback({ url: e.target.value, title: text });
          } else {
            setText(e.target.value);
          }
        }}
        type="text"
        placeholder="paste a link to bookmark"
      ></input>
      {text}
    </div>
  );
};

export default Input;
