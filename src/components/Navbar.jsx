import React, { useState, useEffect } from 'react';
import Logo from '../assets/CheveningLogo.png';
import './Navbar.css';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar fixed top-0 w-full z-500 p-4 transition-colors duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Chevening Logo" className="h-12" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="hidden max-[648px]:block z-20"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Navigation Links */}
        <div
          className={`links flex items-center space-x-8 
          max-[648px]:fixed max-[648px]:inset-0 max-[648px]:bg-white 
          max-[648px]:flex-col max-[648px]:justify-center max-[648px]:space-x-0 max-[648px]:space-y-8
          max-[648px]:transition-transform max-[648px]:duration-300
          ${isOpen ? 'max-[648px]:translate-x-0' : 'max-[648px]:translate-x-full'}`}
        >
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">
            About Us
          </Link>
          <Link to="/blog" className="text-gray-600 hover:text-gray-900">
            Blog
          </Link>
          <Link to="/events" className="text-gray-600 hover:text-gray-900">
            Events
          </Link>
          <Link to="/login" className="bg-neutral-950 text-white px-6 py-2 rounded"> Login </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
