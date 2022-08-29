import React from "react";
import Bookmark from "./Bookmark";
import { Link } from "react-router-dom";
import "./BookmarkList.css";
import QRCodeStyling from "qr-code-styling";
import { BiBarcodeReader } from "react-icons/bi";

const BookmarkList = (props) => {
  const { list, deleteCallback } = props;

  const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    dotsOptions: {
      color: "#444",
      type: "rounded",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 20,
    },
  });

  const genList = (list) => {
    return list.map((bm, id) => {
      return (
        <tr>
          <Bookmark props={{ id: bm.id, url: bm.url, title: bm.title }} />
          <td>
            <Link to={String(bm.id)}>Details</Link>
          </td>
          <td>
            <button onClick={() => deleteCallback(bm.id)}>delete</button>
          </td>
          <td>
            <BiBarcodeReader
              onClick={() => {
                qrCode.update({
                  data: bm.url,
                });
                qrCode.download({ extension: "png" });
              }}
            />
          </td>
        </tr>
      );
    });
  };

  return (
    <table>
      <thead>
        <th>id</th>
        <th>url</th>
        <th>title</th>
        <th>View</th>
        <th>Delete</th>
        <th>QR Code</th>
      </thead>
      <tbody>{genList(list)}</tbody>
    </table>
  );
};

export default BookmarkList;
