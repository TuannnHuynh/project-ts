import { useState } from "react";
import { TMenuItem } from "./data";
import MenuList from "./MenuList";
import { FaPlus, FaMinus } from "react-icons/fa";

type MenuItemProps = {
  item: TMenuItem;
};

const MenuItem = ({ item }: MenuItemProps) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState<
    Record<string, boolean>
  >({});
  const handleToggleChildren = (getCurrentLabel: string): void => {
    setDisplayCurrentChildren((prevState) => ({
      ...prevState,
      [getCurrentLabel]: !prevState[getCurrentLabel],
    }));
  };
  console.log(displayCurrentChildren);

  return (
    <li className="p-4 text-[#fff]">
      <div>
        <p
          onClick={() => handleToggleChildren(item.label)}
          className="flex cursor-pointer items-center text-2xl font-semibold"
        >
          {item.label}{" "}
          {item && item.children && item.children.length ? (
            <span className="ms-2">
              {displayCurrentChildren[item.label] ? (
                <FaMinus size={16} />
              ) : (
                <FaPlus size={16} />
              )}
            </span>
          ) : null}
        </p>
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
