import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    // Load shopping list from localStorage
    const savedShoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
    setShoppingList(savedShoppingList);
  }, []);

  const handleRemoveItem = (item) => {
    const updatedList = shoppingList.filter((ingredient) => ingredient !== item);
    setShoppingList(updatedList);
    localStorage.setItem('shoppingList', JSON.stringify(updatedList));
  };

  return (
    <div className="container mx-auto p-6">
      <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
      <h1 className="text-3xl font-bold mt-4">Shopping List</h1>
      {shoppingList.length > 0 ? (
        <ul className="list-disc list-inside mt-4">
          {shoppingList.map((item, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span>{item}</span>
              <button
                onClick={() => handleRemoveItem(item)}
                className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-gray-600">Your shopping list is empty.</p>
      )}
    </div>
  );
};

export default ShoppingList;