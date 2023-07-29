import React, { useState } from 'react';

const SearchBox = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="relative">
      <button
        className="w-6 h-6 absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 focus:outline-none"
        onClick={handleSearchIconClick}
      >
        <svg
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M10 18l6-6m0 0l-6-6m6 6h-6"></path>
        </svg>
      </button>
      {isSearchOpen && (
        <div className="absolute top-0 right-0 mt-2">
          <input
            type="text"
            placeholder="Search..."
            className="py-2 pl-4 pr-10 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      )}
    </div>
  );
};

export default SearchBox;
