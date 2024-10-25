import Accordian from "./components/Accordian/Accordian";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import LoadMore from "./components/LoadMore/LoadMore";
import QRCodeGeneration from "./components/QRCodeGeneration/QRCodeGeneration";
import RandomColor from "./components/RandomColor/RandomColor";
import StarRating from "./components/StarRating/StarRating";
import TreeView from "./components/TreeView/TreeView";
import menus from "./components/TreeView/data";

const App = () => {
  return (
    <div>
      <Accordian />
      <RandomColor />
      <StarRating />
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={1} />
      <LoadMore />
      <TreeView menus={menus} />
      <QRCodeGeneration />
    </div>
  );
};

export default App;
