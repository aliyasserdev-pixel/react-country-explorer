import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Logo />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
