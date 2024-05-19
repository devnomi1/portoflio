import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl mb-12">
          Hi, I'm [Your Name], a passionate developer specialized in frontend and backend development.
        </p>
        <a
          href="#projects"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
