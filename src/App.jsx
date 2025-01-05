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
          <div className="flex justify-between items-center px-4 lg:px-6">
            <h1 className="text-xl md:text-3xl font-bold tracking-wide">Recipe Finder</h1>
            <nav className="space-x-4 md:space-x-6 text-sm md:text-lg">
              <Link to="/" className="hover:underline text-white">
                Home
              </Link>
              <Link to="/favorites" className="hover:underline text-white">
                Favorites
              </Link>
              <Link to="/about" className="hover:underline text-white">
                About Us
              </Link>
              <Link to="/shopping-list" className="hover:underline text-white">
                Shopping List
              </Link>
            </nav>
          </div>
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
          <div className="flex justify-between items-center px-4 lg:px-6">
            <Link to="/privacy" className="hover:underline text-white">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:underline text-white">
              Contact Us
            </Link>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;