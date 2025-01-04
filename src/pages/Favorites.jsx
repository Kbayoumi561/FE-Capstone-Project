import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto p-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4 text-center">Your Favorite Recipes</h1>
        <p className="text-gray-600 text-center mb-6">
          No favorites yet! Add some recipes to your favorites.
        </p>
        <Link
          to="/"
          className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          Browse Recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Favorite Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;