import Tabs from "./Tabs";

export type TTaps = {
  label: string;
  content: JSX.Element;
  color: string;
};

const ContentTab3 = (): JSX.Element => {
  return <h1>This is content tab 3</h1>;
};

const Tab = () => {
  const tabs: TTaps[] = [
    {
      label: "Tab 1",
      content: <div>This is content tab 1</div>,
      color: "red",
    },
    {
      label: "Tab 2",
      content: <div>This is content tab 2</div>,
      color: "green",
    },
    {
      label: "Tab 3",
      content: <ContentTab3 />,
      color: "yellow",
    },
  ];
  const handleChange = (currentTabIndex: number) => {
    console.log(currentTabIndex);
  };
  return <Tabs TabsContent={tabs} onChange={handleChange} />;
};

export default Tab;
