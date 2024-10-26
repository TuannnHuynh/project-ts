import { useState } from "react";
import { TTaps } from "./Tab";

type TTabsProps = {
  TabsContent: TTaps[];
  onChange: (index: number) => void;
};

const Tabs = ({ TabsContent, onChange }: TTabsProps) => {
  const [currentTabIndex, setCurrentTabInex] = useState<number>(0);
  const handleOnClick = (getCurrentIndex: number) => {
    setCurrentTabInex(getCurrentIndex);
    onChange(getCurrentIndex);
  };
  return (
    <div className="wrapper mt-10 h-[300px] bg-slate-400 pt-5">
      <div className="heading flex justify-center">
        {TabsContent.map((val, idx) => {
          return (
            <div onClick={() => handleOnClick(idx)} key={val.label}>
              <span className="label mx-1 block cursor-pointer rounded bg-[#444] px-6 py-3 font-semibold text-[#fff] sm:mx-2 sm:px-8">
                {val.label}
              </span>
            </div>
          );
        })}
      </div>
      <div
        style={{ color: TabsContent[currentTabIndex].color }}
        className="content mt-10 text-center text-4xl font-semibold text-[#fff] sm:text-5xl"
      >
        {TabsContent[currentTabIndex] && TabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
