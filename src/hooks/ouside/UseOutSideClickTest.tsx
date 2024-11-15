import { useRef, useState } from "react";
import useOutSideClick from "./useOutSideClick";

const UseOutSideClickTest = () => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useOutSideClick(ref, () => setShowContent(false));
  return (
    <div className="text-center">
      {showContent ? (
        <div ref={ref}>
          <h2>This is random content</h2>
          <p>
            Click outside of this to close this. It won't close if you click
            inside of this content
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default UseOutSideClickTest;
