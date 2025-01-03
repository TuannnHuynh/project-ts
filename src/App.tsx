import Accordian from "./components/Accordian/Accordian";
//import GithubProfile from "./components/GithubProfile/GithubProfile";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import LightDarkMode from "./components/LightDarkMode/LightDarkMode";
import LoadMore from "./components/LoadMore/LoadMore";
import ModalTest from "./components/Modal/ModalTest";
import QRCodeGeneration from "./components/QRCodeGeneration/QRCodeGeneration";
import RandomColor from "./components/RandomColor/RandomColor";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";
import ScrollTopAndBottom from "./components/ScrollTopAndBottom/ScrollTopAndBottom";
import SearchAutocomplete from "./components/SearchAutocomplete/SearchAutocomplete";
import StarRating from "./components/StarRating/StarRating";
import Tab from "./components/Tabs/Tab";
import TicTactToe from "./components/TicTactToe/TicTactToe";
import TreeView from "./components/TreeView/TreeView";
import menus from "./components/TreeView/data";
import Weather from "./components/Weather/Weather";
import UseOutSideClickTest from "./hooks/ouside/UseOutSideClickTest";
import UseWindowResizeTest from "./hooks/resize/UseWindowResizeTest";
// import UseFetchHookTest from "./hooks/fetch/UseFetchHookTest";

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
      <ModalTest />
      <SearchAutocomplete />
      <TicTactToe />
      <ScrollTopAndBottom />
      <Weather />
      {/* <GithubProfile /> */}
      {/* <UseFetchHookTest /> */}
      {/* <UseOutSideClickTest /> */}
      {/* <UseWindowResizeTest /> */}
    </div>
  );
};

export default App;
