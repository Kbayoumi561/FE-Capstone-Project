import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const RecipeCard = ({ recipe, isFavorite, onFavoriteToggle }) => {
  const shareUrl = `${window.location.origin}/recipe/${recipe.idMeal}`;
  const shareText = `Check out this recipe: ${recipe.strMeal}`;

  return (
    <div className="border rounded-lg p-4 shadow-md flex flex-col">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="rounded-lg w-full"
      />
      <h2 className="text-lg font-semibold mt-2">{recipe.strMeal}</h2>
      <p className="text-sm text-gray-600">{recipe.strCategory}</p>
      <p className="text-sm text-gray-600">{recipe.strArea}</p>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={onFavoriteToggle}
          className={`px-4 py-2 text-sm rounded ${
            isFavorite ? 'bg-red-500 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'
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
      <div className="mt-4 flex justify-around items-center space-x-4 flex-wrap">
        <FacebookShareButton url={shareUrl} quote={shareText}>
          <button className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24H12.82v-9.294H9.692V11.41h3.127V8.91c0-3.1 1.893-4.789 4.659-4.789 1.325 0 2.464.1 2.797.143v3.243h-1.918c-1.5 0-1.792.714-1.792 1.76v2.308h3.587l-.467 3.296h-3.12V24h6.116C23.406 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
            </svg>
            <span>Facebook</span>
          </button>
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={shareText}>
          <button className="p-2 bg-blue-400 text-white rounded hover:bg-blue-500 flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.607 1.794-1.57 2.163-2.724-.949.555-2.005.959-3.127 1.184-.897-.959-2.173-1.555-3.591-1.555-2.717 0-4.92 2.205-4.92 4.92 0 .39.045.765.127 1.124-4.087-.205-7.713-2.165-10.141-5.144-.422.722-.666 1.561-.666 2.475 0 1.71.87 3.214 2.188 4.096-.807-.026-1.566-.248-2.23-.616v.062c0 2.388 1.698 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.625-.03-.927-.086.631 1.953 2.445 3.376 4.6 3.415-1.68 1.318-3.808 2.104-6.102 2.104-.396 0-.79-.023-1.175-.067C2.93 21.43 6.415 22.5 10.073 22.5c7.546 0 11.675-6.254 11.675-11.675 0-.178-.004-.355-.012-.532A8.348 8.348 0 0024 4.59z" />
            </svg>
            <span>Twitter</span>
          </button>
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl} title={shareText}>
          <button className="p-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.759-.867-2.031-.967-.273-.099-.471-.148-.67.149-.198.297-.768.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.884-.788-1.482-1.761-1.655-2.058-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.15-.173.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.148-.671-1.613-.92-2.213-.244-.587-.491-.508-.67-.508-.173-.008-.372-.008-.57-.008s-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.877 1.213 3.074.148.198 2.092 3.194 5.065 4.482.709.306 1.262.489 1.695.622.712.227 1.36.194 1.87.118.57-.089 1.759-.718 2.007-1.411.248-.694.248-1.29.173-1.411-.074-.124-.272-.198-.57-.347z" />
            </svg>
            <span>WhatsApp</span>
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