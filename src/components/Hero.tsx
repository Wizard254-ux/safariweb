// components/Hero.tsx
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-96 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/HeroImage.jpg')", 
          filter: "brightness(0.7)"
        }}
      />
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Explore Africa's Finest Adventures
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8">
          Unforgettable experiences tailored just for you
        </p>
        
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search destinations or experiences"
              className="w-full py-4 pl-12 pr-4 text-gray-700 focus:outline-none"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
