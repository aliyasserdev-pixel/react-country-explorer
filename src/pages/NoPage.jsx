import { Link } from "react-router-dom";
import "./NoPage.css";

const NoPage = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <div className="not-found-icon">404</div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-text">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="not-found-btn">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NoPage;
