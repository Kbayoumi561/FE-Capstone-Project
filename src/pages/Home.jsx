import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';

const Home = ({ onSearch, recipes, error }) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleFavoriteToggle = (recipe) => {
    if (favorites.find((fav) => fav.idMeal === recipe.idMeal)) {
      // Remove from favorites
      setFavorites(favorites.filter((fav) => fav.idMeal !== recipe.idMeal));
    } else {
      // Add to favorites
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-lg mb-8">
        <SearchBar onSearch={onSearch} />
      </div>
      {error && (
        <p className="text-red-500 text-center text-lg font-semibold mb-6">
          {error}
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              isFavorite={!!favorites.find((fav) => fav.idMeal === recipe.idMeal)}
              onFavoriteToggle={() => handleFavoriteToggle(recipe)}
            />
          ))
        ) : (
          !error && (
            <p className="text-gray-600 text-center col-span-full">
              No recipes found. Try searching for something else.
            </p>
          )
        )}
      </div>
    </div>
  );
};

Home.propTypes = {
  onSearch: PropTypes.func.isRequired,
  recipes: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
};

export default Home;