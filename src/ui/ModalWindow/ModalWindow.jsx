import Modal from "react-modal";
import { Icon } from "../Icon/Icon";

Modal.setAppElement("#root");

export const ModalWindow = ({ children, onClose, isOpen }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "var(--badges)",
      borderRadius: "12px",
      width: "335px",
      border: " 1px solid rgba(104, 104, 104, 0.2)",
      padding: "40px",
    },
    overlay: {
      backgroundColor: "rgba(20, 20, 20, 0.6)",
      zIndex: "999",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
        }}
      >
        <Icon name="close" width={20} height={20} />
      </button>
      {children}
    </Modal>
  );
};
