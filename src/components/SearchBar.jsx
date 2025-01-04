import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) onSearch(query.trim());
  };

  return (
    <div className="flex items-center bg-white rounded-md shadow-md p-2 w-3/4 max-w-xl">
      <input
        type="text"
        className="flex-grow p-2 rounded-l-md focus:outline-none"
        placeholder="Search for Recipe"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600"
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