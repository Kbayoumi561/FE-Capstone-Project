import React from 'react';
import PropTypes from 'prop-types';

const RecipeDetails = ({ recipe, onBack }) => {
  return (
    <div className="p-4">
      <button
        onClick={onBack}
        className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
      >
        Back
      </button>
      <h1 className="text-2xl font-bold mt-4">{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full mt-4" />
      <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
      <ul className="list-disc ml-6">
        {Object.entries(recipe)
          .filter(([key, value]) => key.startsWith('strIngredient') && value)
          .map(([key, value], index) => (
            <li key={index}>{value}</li>
          ))}
      </ul>
      <h2 className="text-xl font-semibold mt-4">Instructions</h2>
      <p>{recipe.strInstructions}</p>
      {recipe.strYoutube && (
        <div className="mt-4">
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

RecipeDetails.propTypes = {
  recipe: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    strInstructions: PropTypes.string.isRequired,
    strYoutube: PropTypes.string,
  }).isRequired, // Validates the required properties for `recipe`
  onBack: PropTypes.func.isRequired, // Ensures `onBack` is a function
};

export default RecipeDetails;