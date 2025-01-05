import PropTypes from 'prop-types';
import { useEffect } from 'react';
import foodImage from 'src/assets/food.jpg';

const WelcomeModal = ({ onClose }) => {
  useEffect(() => {
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-3xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-orange-500 mb-4">
            Welcome to Recipe Finder!
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Discover a world of delicious recipes and cuisines from across the
            globe. From Italian pasta to Indian curries, explore the tastes of
            the world!
          </p>
          <img
              src={foodImage}
              alt="World Cuisines"
              className="mx-auto rounded-lg shadow-md mb-6"
          />
            <p className="text-gray-600">
            <em>{`"Good food is the foundation of genuine happiness."`}</em> – Auguste Escoffier
            </p>
        </div>
      </div>
    </div>
  );
};


WelcomeModal.propTypes = {
  onClose: PropTypes.func.isRequired, 
};

export default WelcomeModal;