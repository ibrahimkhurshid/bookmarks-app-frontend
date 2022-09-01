import React, { useState, useRef, useEffect } from "react";
import Bookmark from "../bookmark/Bookmark";
import { Link } from "react-router-dom";
import { BiBarcodeReader } from "react-icons/bi";
import Spinner from "../spinner/spinner";
import { StyledTable } from "../../styled-components/StyledTable";
import { DeleteButton } from "../../styled-components/DeleteButton";
import Modal from "../modal/modal";
import Qr from "../qr/qr";

const BookmarkList = ({ list, deleteCallback }) => {
  const [show, setShow] = useState(false);
  const [mouseLoc, setMouseLoc] = useState(null);
  const [qr, setQr] = useState();

  const genList = (list) => {
    return list.map((bm, id) => {
      return (
        <tr>
          <Bookmark props={{ id: bm.id, url: bm.url, title: bm.title }} />
          <td>
            <Link to={String(bm.id)}>Details</Link>
          </td>
          <td>
            <DeleteButton onClick={() => deleteCallback(bm.id)}>
              delete
            </DeleteButton>
          </td>
          <td>
            <BiBarcodeReader
              onMouseEnter={(e) => {
                setShow(true);
                setMouseLoc({ x: e.clientX, y: e.clientY });
                setQr(bm.url);
              }}
              onMouseLeave={() => {
                setShow(false);
              }}
              margin="0"
            />
          </td>
        </tr>
      );
    });
  };
  console.log("loc", mouseLoc);
  console.log("show", show);

  return (
    <StyledTable>
      <thead>
        <th>id</th>
        <th>url</th>
        <th>title</th>
        <th>View</th>
        <th>Delete</th>
        <th>QR Code</th>
      </thead>
      {list.length > 0 ? <tbody>{genList(list)}</tbody> : <Spinner />}
      <Modal
        isOpened={show}
        location={mouseLoc}
        content={<Qr url={qr}></Qr>}
      ></Modal>
    </StyledTable>
  );
};

export default BookmarkList;
