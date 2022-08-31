import React, { useEffect, useState } from "react";
import BookmarkList from "../bookmarklist/BookmarkList";
import { HOST } from "../../env";
import httpHelper from "../../helpers/httpHelper";
import Input from "../input/Input";
import "./Bookmarks.css";

const Bookmarks = () => {
  const [list, setList] = useState([]);
  const api = httpHelper();

  // const updateUser = (id, user) => {
  //   api
  //     .put(`${url}/${id}`, { body: user })
  //     .then((res) => getUsers())
  //     .catch((err) => console.log(err));
  // };

  const getBookmarks = () => {
    api
      .get(HOST)
      .then((res) => {
        console.log("API :", res.length);
        setList(res);
      })
      .catch((err) => console.log(err));
  };

  const postBookmark = (url) => {
    api
      .post(HOST, { body: url })
      .then((res) => {
        getBookmarks();
        // alert(res);
      })
      .catch((err) => console.log(err));
  };

  const deleteBookmark = (id) => {
    api
      .del(`${HOST}${id}`, {})
      .then((res) => getBookmarks())
      .catch((err) => console.log(err));
  };

  useEffect(
    //set hard coded bookmarks
    // setList([
    //   { id: 1, url: "http://google.com", title: "Google" },
    //   { id: 1, url: "http://google.com", title: "Google" },
    // ]);

    () => getBookmarks(),
    []
  );

  return (
    <div className="container">
      {list ? (
        <BookmarkList list={list} deleteCallback={deleteBookmark} />
      ) : (
        <></>
      )}
      <Input createCallback={postBookmark} update={getBookmarks} />
    </div>
  );
};

export default Bookmarks;
