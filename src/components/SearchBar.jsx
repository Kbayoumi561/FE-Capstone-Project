import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) onSearch(query.trim());
  };

  return (
    <div
      className="flex justify-center items-center shadow-md rounded-full overflow-hidden px-4 py-2"
      style={{
        backgroundColor: '#ffffff', // Enforce a light background
        border: '1px solid #e5e7eb', // Optional border for consistency
      }}
    >
      <input
        type="text"
        className="flex-grow px-4 py-2 text-lg focus:outline-none"
        placeholder="Search for Recipe"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          color: '#4b5563', // Enforce dark text color
          backgroundColor: 'transparent', // Ensure the background doesn't inherit dark mode
        }}
      />
      <button
        onClick={handleSearch}
        className="text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
        style={{
          backgroundColor: '#f97316', // Enforce orange button color
        }}
      >
        🔍
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;