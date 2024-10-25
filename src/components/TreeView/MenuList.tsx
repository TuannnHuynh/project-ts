import { TMenuItem } from "./data";
import MenuItem from "./MenuItem";

type MenuListProps = {
  list: TMenuItem[];
};

const MenuList = ({ list = [] }: MenuListProps) => {
  return (
    <ul className="">
      {list && list.length
        ? list.map((val) => {
            return <MenuItem item={val} />;
          })
        : null}
    </ul>
  );
};

export default MenuList;
