import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) onSearch(query.trim());
  };

  return (
    <div className="flex justify-center items-center bg-white shadow-md rounded-full overflow-hidden max-w-lg mx-auto">
      <input
        type="text"
        className="flex-grow px-4 py-2 text-lg focus:outline-none"
        placeholder="Search for Recipe"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-orange-500 text-white px-6 py-2 hover:bg-orange-600 transition"
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