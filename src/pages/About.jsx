const About = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">About Recipe Finder</h1>
        <p className="text-gray-600 text-center max-w-2xl">
          Welcome to Recipe Finder! Our platform allows you to discover recipes
          from all around the world. Use our search feature to explore new dishes
          and find step-by-step instructions for your favorite meals.
        </p>
        <p className="text-gray-600 mt-4 text-center">
          Powered by <a href="https://www.themealdb.com" className="text-blue-500 underline">TheMealDB API</a>.
        </p>
      </div>
    );
  };
  
  export default About;  