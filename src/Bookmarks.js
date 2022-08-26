import React, { useEffect, useState } from "react";
import BookmarkList from "./BookmarkList";
import { HOST } from "./env";
import Input from "./Input";
import SearchBar from "./SearchBar";

const Bookmarks = () => {
  const [list, setList] = useState([]);

  // async function test() {
  //   console.log('Ready');
  //   let example = await fetch('http://httpbin.org/get');
  //   console.log('I will print second');
  // }

  const testCreate = async (url) => {
    const example = await fetch(HOST, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(url),
    })
      .then(() => fetchList()) //most time spent solving this setstate issue
      .then((list) => {
        setList(list);
        console.log(list);
      }); //

    // const lis = await fetchList();
    // console.log(lis.length);
    // setList(lis);
    // fetchList().then((res) => setList(res));

    // return lis;
  };

  const delBookmark = async (id) => {
    const res = await fetch(`${HOST}${id}`, { method: "DELETE" });
    const json = await res.json();
    const lis = await fetchList();
    fetchList().then((res) => setList(res));

    // setList(lis);
  };

  async function fetchList() {
    const res = await fetch(HOST);
    const json = await res.json();
    return json;
  }

  useEffect(() => {
    // const lis = await fetchList();
    // setList(lis);
    //set hard coded bookmarks
    // setList([
    //   { id: 1, url: "http://google.com", title: "Google" },
    //   { id: 1, url: "http://google.com", title: "Google" },
    // ]);
    fetchList().then((res) => setList(res));
  }, [list]);

  return (
    <>
      <SearchBar />
      {!list.length <= 0 ? (
        <BookmarkList list={list} deleteCallback={delBookmark} />
      ) : (
        <div>empty</div>
      )}
      <Input createCallback={testCreate} />
    </>
  );
};

export default Bookmarks;
