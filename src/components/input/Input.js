import React, { useEffect, useState } from "react";

const Input = (props) => {
  const { createCallback, update } = props;
  const [text, setText] = useState(null);

  return (
    <input
      onKeyUp={(e) => {
        if (e.key == "Enter") {
          createCallback({ url: e.target.value, title: text });
          // i don't understand that, maybe fetch post call
          //  needs some time to post and finish
          setTimeout(() => update(), 5000);
        } else {
          setText(e.target.value);
        }
      }}
      type="text"
      placeholder="paste a link to bookmark"
    ></input>
  );
};

export default Input;
