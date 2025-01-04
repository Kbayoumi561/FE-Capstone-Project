import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchRecipes } from '../utils/api';

const RecipeDetails = () => {
  const { idMeal } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const data = await fetchRecipes('');
        const selectedRecipe = data.meals.find((meal) => meal.idMeal === idMeal);
        setRecipe(selectedRecipe);
      } catch (error) {
        console.error('Failed to fetch recipe details:', error);
      }
    };
    fetchRecipeDetails();
  }, [idMeal]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 container mx-auto">
      <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
      <h1 className="text-3xl font-bold mt-4">{recipe.strMeal}</h1>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="rounded-lg w-full my-4"
      />
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
    </div>
  );
};

export default RecipeDetails;