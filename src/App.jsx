import { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import RecipeDetails from './components/RecipeDetails';
import { fetchRecipes } from './utils/api'; // Importing the API helper
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [error, setError] = useState(''); // State to handle API errors

  const handleSearch = async (query) => {
    setError(''); // Clear any existing errors before new search
    try {
      const data = await fetchRecipes(query); // Using the helper function to fetch recipes
      setRecipes(data.meals || []); // Set recipes if available, or an empty array if no results
    } catch (err) {
      console.error('Error fetching recipes:', err);
      setError('Failed to fetch recipes. Please try again later.');
      setRecipes([]); // Reset recipes in case of an error
    }
  };

  return (
    <div className="container mx-auto p-4">
      {!selectedRecipe ? (
        <>
          {/* Search Bar Component */}
          <SearchBar onSearch={handleSearch} />
          
          {/* Error Message */}
          {error && (
            <p className="text-center text-red-500 mt-4">{error}</p>
          )}

          {/* Recipe Cards */}
          <div className="flex flex-wrap justify-center mt-4">
            {recipes.length > 0 ? (
              recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.idMeal}
                  recipe={recipe}
                  onClick={() => setSelectedRecipe(recipe)}
                />
              ))
            ) : (
              !error && (
                <p className="text-center text-gray-500 mt-4">
                  No recipes found. Try searching for something else.
                </p>
              )
            )}
          </div>
        </>
      ) : (
        /* Recipe Details View */
        <RecipeDetails
          recipe={selectedRecipe}
          onBack={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}

export default App;