import { Link } from "react-router-dom";
import "./CountryCard.css";

const CountryCard = ({ country }) => {
  const formatPopulation = (num) => {
    if (num >= 1000000000) return `${(num / 1000000000).toFixed(1)}B`;
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <Link to={`/country/${country.name}`} className="country-card">
      <div className="country-flag">
        <span className="flag-emoji">
          {
            <img
              src={country.flag}
              alt={country.name}
              className="country-flag"
            />
          }
        </span>
      </div>
      <div className="country-info">
        <h3 className="country-name">{country.name}</h3>
        <p className="country-detail">
          <span className="detail-label">Population:</span>
          <span className="detail-value">
            {formatPopulation(country.population)}
          </span>
        </p>
        <p className="country-detail">
          <span className="detail-label">Region:</span>
          <span className="detail-value">{country.region}</span>
        </p>
        <p className="country-detail">
          <span className="detail-label">Capital:</span>
          <span className="detail-value">{country.capital}</span>
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
