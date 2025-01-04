import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';

const Home = ({ onSearch, recipes, error }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-orange-500 text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <h1 className="text-3xl font-bold tracking-wide">Recipe Finder</h1>
          {/* Navigation Links */}
          <nav className="space-x-6 text-lg">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/favorites" className="hover:underline">
              Favorites
            </Link>
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="text-center mb-8">
          <SearchBar onSearch={onSearch} />
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-center text-lg font-semibold mb-6">
            {error}
          </p>
        )}

        {/* Recipe Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
      </main>

      {/* Footer */}
      <footer className="bg-orange-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link to="/contact" className="hover:underline">
            Contact Us
          </Link>
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
};

Home.propTypes = {
  onSearch: PropTypes.func.isRequired,
  recipes: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
};

export default Home;