import useLocalStorage from "./useLocalStorage";
import "./theme.css";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  console.log(theme);

  return (
    <div
      data-theme={theme}
      className="light-dark-mode pb-14 lg:h-screen lg:pb-0"
    >
      <h2 className="py-14 text-center text-4xl font-bold lg:text-5xl">
        Light Dark Mode
      </h2>
      <div className="container">
        <p className="mb-4 text-center text-3xl font-bold lg:mb-0">
          Hello World !
        </p>
      </div>
      <div className="btn flex h-1/2 items-center justify-center">
        <button
          className="rounded-md px-4 py-2 lg:px-8 lg:py-5"
          onClick={handleToggleTheme}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default LightDarkMode;
