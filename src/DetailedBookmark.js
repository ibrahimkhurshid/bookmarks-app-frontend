import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Bookmark from "./Bookmark";
import { HOST } from "./env";

const DetailedBookmark = () => {
  const [bookmark, setBookmark] = useState({
    id: "id",
    url: "url",
    title: "title",
  });

  const params = useParams();

  const fetchBookmark = () => {
    console.log(`${HOST}${params.id}`);
    fetch(`${HOST}${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        //returns array of one object
        setBookmark(data[0]);
      })
      .catch((err) => {
        setBookmark({
          id: "id",
          url: "url",
          title: "title",
        });
      });
  };
  useEffect(() => {
    fetchBookmark();
  }, []);

  return (
    <div>
      <Bookmark props={bookmark} />
    </div>
  );
};

export default DetailedBookmark;
