import { useTheme } from "../context/ThemeContext";
import "./ThemeSwitcher.css";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-switcher" onClick={toggleTheme}>
      <span className="theme-icon">{theme === "light" ? "🌙" : "☀️"}</span>
      <span className="theme-text">{theme === "light" ? "Dark" : "Light"}</span>
    </button>
  );
};

export default ThemeSwitcher;
