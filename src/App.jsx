import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import { fetchRecipes } from './utils/api';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

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
        {/* Header */}
        <header className="bg-orange-500 text-white py-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center px-6">
            <h1 className="text-3xl font-bold tracking-wide">Recipe Finder</h1>
            <nav className="space-x-6 text-lg">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/favorites" className="hover:underline">Favorites</Link>
              <Link to="/about" className="hover:underline">About Us</Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <div className="container mx-auto p-6">
            <Routes>
              <Route path="/" element={<Home onSearch={handleSearch} recipes={recipes} error={error} />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-orange-500 text-white py-4">
          <div className="container mx-auto flex justify-between px-6">
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/contact" className="hover:underline">Contact Us</Link>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;