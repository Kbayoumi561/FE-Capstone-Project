import PropTypes from 'prop-types';

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div
      onClick={() => onClick(recipe)}
      className="border rounded-md shadow-md hover:shadow-lg cursor-pointer p-4 m-2 w-80"
    >
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full rounded-md" />
      <h3 className="mt-2 font-bold">{recipe.strMeal}</h3>
      <p className="text-gray-600">Category: {recipe.strCategory}</p>
      <p className="text-gray-600">Cuisine: {recipe.strArea}</p>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
    strArea: PropTypes.string.isRequired,
  }).isRequired, // Ensures `recipe` has required shape
  onClick: PropTypes.func.isRequired, // `onClick` must be a function
};

export default RecipeCard;