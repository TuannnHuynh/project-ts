import { useLayoutEffect, useState } from "react";

type TSize = {
  width: number;
  height: number;
};

const useWindowResize = (): TSize => {
  const [windowSize, setWindowSize] = useState<TSize>({
    width: 0,
    height: 0,
  });
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowSize;
};

export default useWindowResize;
