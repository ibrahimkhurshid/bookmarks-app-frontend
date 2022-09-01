import React, { useEffect, useState } from "react";
import BookmarkList from "../bookmarklist/BookmarkList";
import { HOST } from "../../env";
import httpHelper from "../../helpers/httpHelper";
import Input from "../input/Input";

const Bookmarks = ({ pull }) => {
  const [list, setList] = useState([]);
  const api = httpHelper();

  const searchBookmarks = (query) => {
    api
      .get(`${HOST}search?url=${query}`)
      .then((res) => {
        console.log("Search API :", res.length);
        setList(res);
      })
      .catch((err) => console.log(err));
  };

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
      })
      .catch((err) => console.log(err));
  };

  const deleteBookmark = (id) => {
    api
      .del(`${HOST}${id}`, {})
      .then(() => getBookmarks())
      .catch((err) => console.log(err));
  };

  useEffect(
    //set hard coded bookmarks
    // setList([
    //   { id: 1, url: "http://google.com", title: "Google" },
    //   { id: 1, url: "http://google.com", title: "Google" },
    // ]);

    () => {
      getBookmarks();
      pull(searchBookmarks);
    },
    []
  );
  return (
    <div>
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
