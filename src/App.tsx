import Accordian from "./components/Accordian/Accordian";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import LightDarkMode from "./components/LightDarkMode/LightDarkMode";
import LoadMore from "./components/LoadMore/LoadMore";
import QRCodeGeneration from "./components/QRCodeGeneration/QRCodeGeneration";
import RandomColor from "./components/RandomColor/RandomColor";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";
import StarRating from "./components/StarRating/StarRating";
import Tab from "./components/Tabs/Tab";
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
      <LightDarkMode />
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      <Tab />
    </div>
  );
};

export default App;
