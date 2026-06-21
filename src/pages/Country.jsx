import { useParams, Link } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import ShowMessage from "../components/ShowMessage";
import "./Country.css";

const Country = () => {
  const { name } = useParams();
  const { data: countries, loading, error } = useFetchData();

  if (loading) {
    return <ShowMessage type="loading" message="Loading country details..." />;
  }

  if (error) {
    return <ShowMessage type="error" message={error} />;
  }

  // تحسين البحث - تجاهل حالة الأحرف والمسافات
  const findCountry = (searchName) => {
    if (!countries) return null;

    // فك تشفير الاسم من URL
    const decodedName = decodeURIComponent(searchName);

    return (
      countries.find((c) => {
        // مقارنة دقيقة مع تجاهل حالة الأحرف
        return c.name.toLowerCase().trim() === decodedName.toLowerCase().trim();
      }) ||
      countries.find((c) => {
        // مقارنة مع تجاهل المسافات
        return (
          c.name.toLowerCase().replace(/\s/g, "") ===
          decodedName.toLowerCase().replace(/\s/g, "")
        );
      })
    );
  };

  const country = findCountry(name);

  if (!country) {
    return (
      <div className="country-not-found">
        <div className="not-found-content">
          <span className="not-found-icon">🌍</span>
          <h2>Country Not Found</h2>
          <p>We couldn't find "{decodeURIComponent(name)}" in our database.</p>
          <Link to="/" className="back-btn">
            ← Back to Countries
          </Link>
        </div>
      </div>
    );
  }

  const formatPopulation = (num) => {
    if (num === 0 || num === null || num === undefined) return "0";
    return num.toLocaleString();
  };

  return (
    <div className="country-details">
      <Link to="/" className="back-btn">
        ← Back to Countries
      </Link>

      <div className="country-content">
        <div className="country-flag-large">
          <span>
            {
              <img
                src={country.flag}
                alt={country.name}
                className="country-flag"
              />
            }
          </span>
        </div>

        <div className="country-info-large">
          <h1 className="country-name-large">{country.name}</h1>

          <div className="country-stats">
            <div className="stat-item">
              <span className="stat-label">Native Name</span>
              <span className="stat-value">{country.nativeName || "N/A"}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Population</span>
              <span className="stat-value">
                {formatPopulation(country.population)}
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Region</span>
              <span className="stat-value">{country.region}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Sub Region</span>
              <span className="stat-value">{country.subregion || "N/A"}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Capital</span>
              <span className="stat-value">{country.capital}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Top Level Domain</span>
              <span className="stat-value">
                {country.topLevelDomain?.length > 0
                  ? country.topLevelDomain.join(", ")
                  : "N/A"}
              </span>
            </div>
          </div>

          {country.languages && country.languages.length > 0 && (
            <div className="country-extra">
              <h3>Languages</h3>
              <div className="languages-list">
                {country.languages.map((lang, index) => (
                  <span key={index} className="language-tag">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          )}

          {country.currencies && country.currencies.length > 0 && (
            <div className="country-extra">
              <h3>Currencies</h3>
              <div className="currencies-list">
                {country.currencies.map((currency, index) => (
                  <span key={index} className="currency-tag">
                    {currency}
                  </span>
                ))}
              </div>
            </div>
          )}

          {country.borders && country.borders.length > 0 && (
            <div className="country-extra">
              <h3>Border Countries</h3>
              <div className="borders-list">
                {country.borders.map((border) => (
                  <span key={border} className="border-tag">
                    {border}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Country;
