import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch, recipes }) => {
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Update filtered suggestions whenever query changes
  useEffect(() => {
    if (query.trim()) {
      const suggestions = recipes.filter((recipe) =>
        recipe.strMeal.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(suggestions);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query, recipes]);

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim());
      setShowSuggestions(false); // Hide suggestions after search
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.strMeal); // Autofill the search bar
    onSearch(suggestion.strMeal); // Trigger search
    setShowSuggestions(false);
  };

  return (
    <div className="relative">
      {/* Search Bar */}
      <div
        className="flex justify-center items-center shadow-md rounded-full overflow-hidden px-3 py-2"
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e5e7eb',
        }}
      >
        {/* Input Field */}
        <input
          type="text"
          className="flex-grow px-4 py-2 text-sm md:text-lg focus:outline-none"
          placeholder="Search for Recipe"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          style={{
            color: '#4b5563',
            backgroundColor: 'transparent',
          }}
        />

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="text-white px-4 py-2 text-sm md:text-base rounded-full hover:bg-orange-600 transition"
          style={{
            backgroundColor: '#f97316',
          }}
        >
          🔍
        </button>
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg z-10">
          {filteredSuggestions.map((suggestion) => (
            <li
              key={suggestion.idMeal}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              {suggestion.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  recipes: PropTypes.array.isRequired, // Recipes list passed as a prop
};

export default SearchBar;