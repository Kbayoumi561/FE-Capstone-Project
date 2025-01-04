import PropTypes from 'prop-types';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';

const Home = ({ onSearch, recipes, error }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-lg mb-8">
        <SearchBar onSearch={onSearch} />
      </div>
      {error && (
        <p className="text-red-500 text-center text-lg font-semibold mb-6">
          {error}
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))
        ) : (
          !error && (
            <p className="text-gray-600 text-center col-span-full">
              No recipes found. Try searching for something else.
            </p>
          )
        )}
      </div>
    </div>
  );
};

Home.propTypes = {
  onSearch: PropTypes.func.isRequired,
  recipes: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
};

export default Home;