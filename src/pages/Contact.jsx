const Contact = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 text-center">
          Have questions or feedback? Reach out to us at:
        </p>
        <p className="text-gray-600 mt-2 font-medium">
          Email: <a href="mailto:contact@recipefinder.com" className="text-blue-500 underline">contact@recipefinder.com</a>
        </p>
        <p className="text-gray-600 mt-2 font-medium">
          Phone: +1 123-456-7890
        </p>
      </div>
    );
  };
  
  export default Contact;  