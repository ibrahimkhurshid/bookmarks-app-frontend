import React, { useState } from "react";
const QRcode = require("qrcode");

const Qr = ({ url }) => {
  const [dataUrl, setDataUrl] = useState();

  QRcode.toDataURL(url).then((res) => setDataUrl(res));

  return <img src={dataUrl} />;
};

export default Qr;
