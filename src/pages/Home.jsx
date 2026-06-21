import { useState, useMemo } from "react";
import useFetchData from "../hooks/useFetchData";
import SearchInput from "../components/SearchInput";
import RegionMenu from "../components/RegionMenu";
import CountryList from "../components/CountryList";
import ShowMessage from "../components/ShowMessage";
import "./Home.css";

const Home = () => {
  const { data: countries, loading, error } = useFetchData();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const filteredCountries = useMemo(() => {
    if (!countries) return [];

    return countries.filter((country) => {
      const matchesSearch = country.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesRegion =
        selectedRegion === "All" || country.region === selectedRegion;

      return matchesSearch && matchesRegion;
    });
  }, [countries, searchTerm, selectedRegion]);

  if (loading) {
    return <ShowMessage type="loading" message="Loading countries..." />;
  }

  if (error) {
    return <ShowMessage type="error" message={error} />;
  }

  return (
    <div className="home">
      <div className="controls">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <RegionMenu
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      </div>
      <CountryList countries={filteredCountries} />
    </div>
  );
};

export default Home;
