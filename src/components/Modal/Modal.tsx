type TModal = {
  id: string;
  header: JSX.Element | string;
  body: JSX.Element;
  footer: JSX.Element | string;
  onClose: () => void;
};

const Modal = ({ id, header, body, footer, onClose }: TModal) => {
  const handleOutsideClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === id) {
      onClose();
    }
  };
  return (
    <div
      id={id || "Modal"}
      onClick={handleOutsideClick}
      className="modal fixed left-0 top-0 z-10 h-full w-full overflow-auto bg-[#000] px-4 pt-[150px] text-center md:px-0"
    >
      <div className="content relative m-auto w-[100%] bg-[#fefefe] p-0 sm:w-[80%] md:w-[60%] lg:w-[50%]">
        <div className="header bg-[#5cb85c] px-3 py-5 text-[#fff]">
          <span
            onClick={onClose}
            className="close-modal float-right cursor-pointer text-[38px] font-bold leading-[0px]"
          >
            &times;
          </span>
          <h2 className="text-3xl">{header ? header : "Header"}</h2>
        </div>
        <div className="body h-[200px] px-8 py-1">
          {body ? (
            body
          ) : (
            <div>
              <p>This is our Modal Body</p>
            </div>
          )}
        </div>
        <div className="footer bg-[#5cb85c] px-2 py-4 text-3xl text-[#fff]">
          <h2>{footer ? footer : "Footer"}</h2>
        </div>
      </div>
    </div>
  );
};

export default Modal;
