// // src/components/Filters.js
// import React from "react";

// export default function Filters({ onFilterChange }) {
//   return (
//     <div className="w-1/4 p-4">
//       <h2 className="mb-4 text-lg font-bold">All Departments</h2>
//       <ul className="mb-4">
//         {[
//           "Asphalt Running",
//           "Casual Styles",
//           "Cultivated Shoes",
//           "Sneakers",
//         ].map((item) => (
//           <li key={item} className="cursor-pointer py-1 hover:text-gray-700">
//             {item}
//           </li>
//         ))}
//       </ul>

//       <h2 className="mb-4 text-lg font-bold">Filter by Price</h2>
//       <div className="mb-4">
//         {/* Implement radio buttons for price ranges */}
//       </div>

//       <h2 className="mb-4 text-lg font-bold">Product Status</h2>
//       <div className="mb-4">{/* Checkbox filters for stock status */}</div>

//       <h2 className="mb-4 text-lg font-bold">Sort by Rating</h2>
//       {/* Implement sorting options here */}
//     </div>
//   );
// }

import React, { useState } from "react";

function Filters({ onFilterChange }) {
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [category, setCategory] = useState("");

  // Handle change in search text
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    onFilterChange({ searchText: e.target.value, sortOption, category });
  };

  // Handle change in sorting option
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    onFilterChange({ searchText, sortOption: e.target.value, category });
  };

  // Handle change in category selection
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onFilterChange({ searchText, sortOption, category: e.target.value });
  };

  return (
    <div className="space-y-4 p-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchText}
        onChange={handleSearchChange}
        className="w-full border p-2"
      />

      {/* Sort by Price Dropdown */}
      <select
        value={sortOption}
        onChange={handleSortChange}
        className="w-full border p-2"
      >
        <option value="">Sort by</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
      </select>

      {/* Category Dropdown */}
      <select
        value={category}
        onChange={handleCategoryChange}
        className="w-full border p-2"
      >
        <option value="">All Categories</option>
        <option value="sneakers">Sneakers</option>
        <option value="boots">Boots</option>
        <option value="sandals">Sandals</option>
      </select>
    </div>
  );
}

export default Filters;
