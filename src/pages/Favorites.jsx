import { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Your Favorite Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {favorites.length > 0 ? (
          favorites.map((recipe) => <RecipeCard key={recipe.idMeal} recipe={recipe} onFavorite={() => {}} />)
        ) : (
          <p>No favorites yet! Add some recipes to your favorites.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;