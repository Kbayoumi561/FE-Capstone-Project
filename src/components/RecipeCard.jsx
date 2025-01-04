import PropTypes from 'prop-types';

const RecipeCard = ({ recipe, isFavorite, onFavoriteToggle }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="rounded-lg w-full"
      />
      <h2 className="text-lg font-semibold mt-2">{recipe.strMeal}</h2>
      <p className="text-sm text-gray-600">{recipe.strCategory}</p>
      <p className="text-sm text-gray-600">{recipe.strArea}</p>
      <button
        onClick={onFavoriteToggle}
        className={`mt-2 px-4 py-2 text-sm rounded ${
          isFavorite ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'
        }`}
      >
        {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
      </button>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onFavoriteToggle: PropTypes.func.isRequired,
};

export default RecipeCard;