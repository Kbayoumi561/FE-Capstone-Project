import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';

const Home = ({ onSearch, recipes, error }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-orange-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold">Recipe Finder</h1>
          {/* Navigation Links */}
          <nav className="space-x-6">
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
      <main className="flex-grow p-4">
        {/* Search Bar */}
        <SearchBar onSearch={onSearch} />
        {/* Error Message */}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {/* Recipe Cards */}
        <div className="flex flex-wrap justify-center mt-6">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))
          ) : (
            !error && (
              <p className="text-gray-600 text-center mt-4">
                No recipes found. Try searching for something else.
              </p>
            )
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-orange-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
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
  onSearch: PropTypes.func.isRequired, // Ensures onSearch is a function
  recipes: PropTypes.array.isRequired, // Validates that recipes is an array
  error: PropTypes.string.isRequired, // Validates that error is a string
};

export default Home;