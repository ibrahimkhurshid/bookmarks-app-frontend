import React from "react";
import { HOST } from "../../env";
import httpHelper from "../../helpers/httpHelper";
import "./password.css";

const Password = ({ call, authSetter }) => {
  const api = httpHelper();

  // const authSecretApi = (key) => {
  //   api.get(`${HOST}`, { headers: { secret: key } }).then((res) => {
  //     if (res.error == "Forbidden") {
  //       authSetter(false);
  //     } else {
  //       authSetter(true);
  //     }
  //   });

  return (
    <div className="password-container">
      <input
        type="password"
        placeholder="secret"
        onChange={(e) => {
          //   setPassword(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            // authSecretApi(e.target.value);
            call(e.target.value);
            authSetter(true);
          }
        }}
      ></input>
      <p>secret: qwerty94</p>
    </div>
  );
};

export default Password;
