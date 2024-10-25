import { TMenuItem } from "./data";
import MenuItem from "./MenuItem";

type MenuListProps = {
  list: TMenuItem[];
};

const MenuList = ({ list = [] }: MenuListProps) => {
  return (
    <ul className="">
      {list && list.length
        ? list.map((val, idx) => {
            return <MenuItem key={`item-${idx}`} item={val} />;
          })
        : null}
    </ul>
  );
};

export default MenuList;
