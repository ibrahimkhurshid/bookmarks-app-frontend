import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Api = ({ src }) => {
  return (
    <>
      <Header />
      <iframe width="100%" height="550px" src={src}></iframe>;<Footer></Footer>
    </>
  );
};

export default Api;
