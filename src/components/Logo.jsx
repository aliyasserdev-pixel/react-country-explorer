import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src="./src/assets/Group 25.svg" alt="" />
      <span className="logo-text">Around The World</span>
    </Link>
  );
};

export default Logo;
