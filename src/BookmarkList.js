import React from "react";
import Bookmark from "./Bookmark";
import { Link } from "react-router-dom";
import "./BookmarkList.css";

const BookmarkList = (props) => {
  const { list, deleteCallback } = props;

  const genList = (list) => {
    return list.map((bm, id) => {
      return (
        <tr>
          <td>
            <Bookmark props={{ id: bm.id, url: bm.url, title: bm.title }} />
          </td>
          <td>
            <Link to={String(bm.id)}>Show</Link>
            <button onClick={() => deleteCallback(bm.id)}>delete</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <tr>
            <th>id</th>
            <th>url</th>
            <th>title</th>
          </tr>
        </tr>
      </thead>
      <tbody>{genList(list)}</tbody>
    </table>
  );
};

export default BookmarkList;
