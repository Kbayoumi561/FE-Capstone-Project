import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const RecipeCard = ({ recipe, isFavorite, onFavoriteToggle }) => {
  const shareUrl = `${window.location.origin}/recipe/${recipe.idMeal}`;
  const shareText = `Check out this recipe: ${recipe.strMeal}`;

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
      <div className="mt-4 flex space-x-2">
        <FacebookShareButton url={shareUrl} quote={shareText}>
          <button className="px-2 py-1 bg-blue-600 text-white rounded text-sm">
            Facebook
          </button>
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={shareText}>
          <button className="px-2 py-1 bg-blue-400 text-white rounded text-sm">
            Twitter
          </button>
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl} title={shareText}>
          <button className="px-2 py-1 bg-green-500 text-white rounded text-sm">
            WhatsApp
          </button>
        </WhatsappShareButton>
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