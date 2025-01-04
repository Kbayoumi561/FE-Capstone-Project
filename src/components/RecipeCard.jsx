import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
      <div className="flex justify-between mt-4">
        <button
          onClick={onFavoriteToggle}
          className={`px-4 py-2 text-sm rounded ${
            isFavorite ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'
          }`}
        >
          {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
        </button>
        <Link
          to={`/recipe/${recipe.idMeal}`}
          className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onFavoriteToggle: PropTypes.func.isRequired,
};

export default RecipeCard;