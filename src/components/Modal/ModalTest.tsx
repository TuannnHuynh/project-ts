import { useState } from "react";
import Modal from "./Modal";

const ModalTest = () => {
  const [showModalPopup, setShowModelPopup] = useState<boolean>(false);
  const handleShowModal = (): void => {
    setShowModelPopup(!showModalPopup);
  };
  const onClose = () => {
    setShowModelPopup(false);
  };
  return (
    <div className="flex items-center justify-center bg-gray-300 py-14">
      <button
        className="rounded-md bg-purple-700 px-8 py-4 font-semibold text-[#fff]"
        onClick={handleShowModal}
      >
        Show modal
      </button>
      {showModalPopup && (
        <Modal
          id={"Modal"}
          onClose={onClose}
          body={<div>Customized Body</div>}
          header={"Header"}
          footer={"Footer"}
        />
      )}
    </div>
  );
};

export default ModalTest;
