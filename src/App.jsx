import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import { fetchRecipes } from './utils/api';

function App() {
  const [recipes, setRecipes] = useState([]); // Recipes state
  const [error, setError] = useState(''); // Error state

  const handleSearch = async (query) => {
    setError('');
    try {
      const data = await fetchRecipes(query); // Fetch recipes
      setRecipes(data.meals || []); // Update recipes
    } catch (err) {
      console.error('Error fetching recipes:', err);
      setError('Failed to fetch recipes. Please try again later.');
    }
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <header className="bg-orange-500 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Recipe Finder</h1>
            <nav className="space-x-6">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/favorites" className="hover:underline">Favorites</Link>
              <Link to="/about" className="hover:underline">About Us</Link>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<Home onSearch={handleSearch} recipes={recipes} error={error} />}
            />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <footer className="bg-orange-500 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/contact" className="hover:underline">Contact Us</Link>
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;