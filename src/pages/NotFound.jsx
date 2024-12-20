import React from 'react'
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/heroBackground.png'

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center">
          <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-50"
          style={{
            backgroundImage: "url(" + backgroundImage + ")",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/80 -z-10"></div>
        </div>
          <h1 className="text-5xl font-bold text-blue-950 mb-4 ">404</h1>
          <p className="text-xl text-gray-700 mb-6 ">Oops! The page you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="px-6 py-3 text-white bg-blue-950 rounded-md hover:bg-blue-600 transition "
          >
            Go Back to Home
          </Link>
        </div>
      );
}

export default NotFound