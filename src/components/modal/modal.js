import { createPortal } from "react-dom";
import { StyledModal } from "./StyledModal";

const Modal = ({ isOpened, content, location }) => {
  if (!isOpened) {
    return null;
  }
  return createPortal(
    <StyledModal loc={location}>{content}</StyledModal>,
    document.getElementById("modal")
  );
};

export default Modal;
