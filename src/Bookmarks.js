import React, { useEffect, useState } from "react";
import BookmarkList from "./BookmarkList";
import { HOST } from "./env";
import httpHelper from "./helpers/httpHelper";
import Input from "./Input";
import SearchBar from "./SearchBar";

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

  useEffect(() => {
    getBookmarks();
  }, []);

  useEffect(() => {
    getBookmarks();
  }, []);

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
    <>
      {console.log("Render", list.length)}
      <SearchBar />
      {list ? (
        <BookmarkList list={list} deleteCallback={deleteBookmark} />
      ) : (
        <div>empty</div>
      )}
      <Input createCallback={postBookmark} update={getBookmarks} />
    </>
  );
};

export default Bookmarks;
