import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const RecipeDetails = () => {
  const { idMeal } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);

  // Fetch recipe details on mount
  useEffect(() => {
    const fetchRecipeDetails = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch recipe details.');
        }
        const data = await response.json();
        if (data.meals && data.meals.length > 0) {
          setRecipe(data.meals[0]);
        } else {
          setError('Recipe not found.');
        }
      } catch (err) {
        setError(err.message || 'An unexpected error occurred.');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [idMeal]);

  // Check if the recipe is already in favorites
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(savedFavorites.some((fav) => fav.idMeal === idMeal));
  }, [idMeal]);

  // Toggle favorite status
  const handleToggleFavorite = () => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = savedFavorites.filter((fav) => fav.idMeal !== idMeal);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      // Add to favorites
      if (recipe) {
        savedFavorites.push(recipe);
        localStorage.setItem('favorites', JSON.stringify(savedFavorites));
      }
    }
    setIsFavorite(!isFavorite);
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <p className="text-center">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <p className="text-center text-red-500">{error}</p>
        <Link to="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <Link to="/" className="text-blue-500 hover:underline">
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mt-4">{recipe.strMeal}</h1>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="rounded-lg w-full my-4"
      />
      <h2 className="text-xl font-semibold">Category</h2>
      <p className="mb-4">{recipe.strCategory}</p>
      <h2 className="text-xl font-semibold">Cuisine</h2>
      <p className="mb-4">{recipe.strArea}</p>
      <h2 className="text-xl font-semibold">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {Object.keys(recipe)
          .filter((key) => key.startsWith('strIngredient') && recipe[key])
          .map((key, index) => (
            <li key={index}>
              {recipe[key]} - {recipe[`strMeasure${key.slice(13)}`]}
            </li>
          ))}
      </ul>
      <h2 className="text-xl font-semibold">Instructions</h2>
      <p className="mb-4">{recipe.strInstructions}</p>
      {recipe.strYoutube && (
        <div>
          <h2 className="text-xl font-semibold">Video Tutorial</h2>
          <iframe
            width="100%"
            height="315"
            src={recipe.strYoutube.replace('watch?v=', 'embed/')}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <button
        onClick={handleToggleFavorite}
        className={`mt-4 px-4 py-2 text-sm rounded ${
          isFavorite ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
        }`}
      >
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default RecipeDetails;