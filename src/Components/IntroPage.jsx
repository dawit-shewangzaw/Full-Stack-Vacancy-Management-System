import React from 'react';
import JobIcon from '../Assets/one.jpg';

const IntroPage = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center py-16 px-8 lg:px-16 mt-4 bg-[#F9F9FB]">
      {/* Left Side: Text */}
      <div className="w-full lg:w-2/3 mb-8 lg:mb-0 lg:mr-8 flex flex-col justify-center lg:items-start px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold mb-4 text-[#4864E1] leading-tight tracking-tight">
          Are You Ready
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold mb-4">
          to work with us ?
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-lg mb-6">
          Jobs is a curated job board of the best jobs for developers, designers, and marketers in the tech industry.
          Jobs is a curated job board of the best jobs for developers, designers, and marketers in the tech industry.
          Jobs is a curated job board of the best jobs for developers, designers, and marketers in the tech industry.
        </p>
        <button className="bg-[#0CAF60] text-white px-8 sm:px-12 lg:px-16 py-2 rounded-full text-base sm:text-lg hover:bg-orange-900">
          Apply here
        </button>
      </div>

      {/* Right Side: Image */}
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
        <img
          src={JobIcon}
          alt="Descriptive Alt Text"
          className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg"
        />
      </div>
    </section>
  );
};

export default IntroPage;
