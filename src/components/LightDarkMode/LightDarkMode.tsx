import useLocalStorage from "./useLocalStorage";
import "./theme.css";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  console.log(theme);

  return (
    <div data-theme={theme} className="light-dark-mode h-screen">
      <h2 className="py-14 text-center text-5xl font-bold">Light Dark Mode</h2>
      <div className="container">
        <p className="text-center text-3xl font-bold">Hello World !</p>
      </div>
      <div className="btn flex h-1/2 items-center justify-center">
        <button className="rounded-md px-8 py-5" onClick={handleToggleTheme}>
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default LightDarkMode;
