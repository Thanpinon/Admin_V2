import { cloneElement, FC, ReactElement } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import FlexBox from "./FlexBox";

// styled component
const StyledModal = styled(FlexBox)<{ open?: boolean }>(({ open }) => ({
  inset: 0,
  zIndex: 999,
  height: "100%",
  position: "fixed",
  alignItems: "center",
  flexDirection: "column",
  opacity: open ? 1 : 0,
  visibility: open ? "visible" : "hidden",
  background: open ? "rgba(0, 0, 0, 0.6)" : "transparent",
  transition: "all 200ms",
  "& .container": {
    top: "50%",
    width: "100%",
    overflow: "hidden",
    position: "relative",
    transform: "translateY(-50%)",
  },
}));

// ===============================================================
type ModalProps = {
  open?: boolean;
  onClose?: () => void;
  children?: ReactElement;
};
// ===============================================================

const Modal: FC<ModalProps> = ({ children, open, onClose }) => {
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  const handleBackdropClick = () => {
    if (onClose) onClose();
  };

  if (globalThis.document && open) {
    let modal = document.querySelector("#modal-root");

    if (!modal) {
      modal = document.createElement("div");
      modal.setAttribute("id", "modal-root");
      document.body.appendChild(modal);
    }

    return createPortal(
      <StyledModal
        open={open}
        alignItems="center"
        flexDirection="column"
        onClick={handleBackdropClick}
      >
        <div className="container">
          <FlexBox justifyContent="center">
            {cloneElement(children, { onClick: handleModalContentClick })}
          </FlexBox>
        </div>
      </StyledModal>,
      modal
    );
  }

  return null;
};

Modal.defaultProps = { open: false };

export default Modal;
