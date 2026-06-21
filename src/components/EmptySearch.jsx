import "./EmptySearch.css";

const EmptySearch = () => {
  return (
    <div className="empty-search">
      <div className="empty-icon">
        <img src="./src/assets/Group 37.svg" alt="" />
      </div>
      <h3 className="empty-title">No results found</h3>
      <p className="empty-text">
        We can’t find the country you searched for... Try to search for another
        one
      </p>
    </div>
  );
};

export default EmptySearch;
