import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import RecipeDetails from './components/RecipeDetails';
import ShoppingList from './pages/ShoppingList';
import WelcomeModal from './components/WelcomeModal';
import { fetchRecipes } from './utils/api';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false); // Added state for mobile menu visibility

  useEffect(() => {
    setShowWelcome(true); // Always show the modal
  }, []);

  const handleCloseWelcomeModal = () => {
    setShowWelcome(false);
  };

  const handleSearch = async (query) => {
    setError('');
    try {
      const data = await fetchRecipes(query);
      setRecipes(data.meals || []);
    } catch (err) {
      console.error('Error fetching recipes:', err);
      setError('Failed to fetch recipes. Please try again later.');
    }
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        {/* Welcome Modal */}
        {showWelcome && <WelcomeModal onClose={handleCloseWelcomeModal} />}

        {/* Header */}
        <header className="bg-orange-500 text-white py-4 shadow-md">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold">Recipe Finder</h1>
            <nav className="hidden md:flex space-x-4 text-lg">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <Link to="/favorites" className="hover:underline">
                Favorites
              </Link>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
              <Link to="/shopping-list" className="hover:underline">
                Shopping List
              </Link>
            </nav>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setShowMobileMenu((prev) => !prev)}
            >
              ☰
            </button>
          </div>
          {/* Mobile Navigation */}
          {showMobileMenu && (
            <nav className="md:hidden bg-orange-500 text-white flex flex-col items-center space-y-2 mt-2 py-2">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <Link to="/favorites" className="hover:underline">
                Favorites
              </Link>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
              <Link to="/shopping-list" className="hover:underline">
                Shopping List
              </Link>
            </nav>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <div className="container mx-auto p-6">
            <Routes>
              <Route
                path="/"
                element={<Home onSearch={handleSearch} recipes={recipes} error={error} />}
              />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/recipe/:idMeal" element={<RecipeDetails />} />
              <Route path="/shopping-list" element={<ShoppingList />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-orange-500 text-white py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;