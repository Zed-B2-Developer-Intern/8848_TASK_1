export default function FilterBar({ filters, handleFilterChange, clearFilters }) {
  const options = [
    "Veg",
    "Non-Veg",
    "Cuisine",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Fast Food",
  ];

  return (
    <div className="filters">
      <h2>Filters</h2>
      <div>
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleFilterChange(opt)}
            className={filters.includes(opt) ? "active" : ""}
          >
            {opt}
          </button>
        ))}
      </div>
      <div style={{ marginTop: "1rem" }}>
        <button onClick={clearFilters}>Clear Filters</button>
      </div>
    </div>
  );
}
