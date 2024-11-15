import useWindowResize from "./useWindowResize";

const UseWindowResizeTest = () => {
  const windowSize = useWindowResize();
  const { height, width } = windowSize;

  return (
    <div className="text-center">
      <h2>Window Resize Test</h2>
      <p>Height: {height}</p>
      <p>Width: {width}</p>
    </div>
  );
};

export default UseWindowResizeTest;
