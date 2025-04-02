import React from "react";

const SearchFilter = ({ searchQuery, setSearchQuery, categoryFilter, setCategoryFilter, categories }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ margin: "10px", padding: "5px", width: "200px" }}
      />

      <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
        style={{ margin: "10px", padding: "5px" }}
      >
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilter;
