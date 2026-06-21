import "./RegionMenu.css";

const RegionMenu = ({ selectedRegion, setSelectedRegion }) => {
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className="region-menu">
      {regions.map((region) => (
        <button
          key={region}
          className={`region-btn ${selectedRegion === region ? "active" : ""}`}
          onClick={() => setSelectedRegion(region)}
        >
          {region}
        </button>
      ))}
    </div>
  );
};

export default RegionMenu;
