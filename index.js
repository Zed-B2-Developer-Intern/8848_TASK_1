import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiFilter } from "react-icons/fi";
import RecipeCard from "../components/RecipeCard";
import FilterBar from "../components/FilterBar";
import allRecipes from "../data/recipes";

export default function Home() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (filter) => {
    setFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  const clearFilters = () => setFilters([]);

  const filteredRecipes = allRecipes.filter((r) => {
    const matchesSearch = r.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filters.length === 0 ||
      filters.includes(r.type) ||
      filters.includes(r.category) ||
      (filters.includes("Fast Food") && r.name.toLowerCase().includes("fast food"));

    return matchesSearch && matchesFilter;
  });

  return (
    <main className="container">
      <h1>Welcome Cook 👨‍🍳</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search recipes..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="filter-button"
        >
          <FiFilter />
        </button>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <FilterBar
              filters={filters}
              handleFilterChange={handleFilterChange}
              clearFilters={clearFilters}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="recipe-grid">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.name} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}
