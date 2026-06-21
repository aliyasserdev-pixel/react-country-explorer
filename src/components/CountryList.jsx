import CountryCard from "./CountryCard";
import EmptySearch from "./EmptySearch";
import "./CountryList.css";

const CountryList = ({ countries }) => {
  if (!countries || countries.length === 0) {
    return <EmptySearch />;
  }

  return (
    <div className="country-list">
      {countries.map((country) => (
        <CountryCard key={country.name} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
