import MenuList from "./MenuList";
import { TMenuItem } from "./data";

type TreeViewProps = {
  menus: TMenuItem[];
};

const TreeView = ({ menus = [] }: TreeViewProps) => {
  return (
    <div className="mt-16 flex bg-slate-400">
      <div className="tree-view min-h-screen w-[300px] bg-[rgb(0,71,100)]">
        <MenuList list={menus} />
      </div>
      <h2 className="w-[70%] pt-4 text-center text-5xl font-bold text-[#333]">
        Tree View
      </h2>
    </div>
  );
};

export default TreeView;
