const About = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">About Recipe Finder</h1>
      <p className="text-gray-600">
        Welcome to Recipe Finder! Our platform allows you to discover recipes 
        from all around the world. Use our search feature to explore new dishes 
        and find step-by-step instructions for your favorite meals.
      </p>
      <p className="text-gray-600 mt-4">
        Powered by <a href="https://www.themealdb.com" className="text-blue-500 underline">TheMealDB API</a>.
      </p>
    </div>
  );
};

export default About;