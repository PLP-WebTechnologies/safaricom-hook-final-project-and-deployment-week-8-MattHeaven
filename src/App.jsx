import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogFeed from './pages/BlogFeed';
import BlogPage from './pages/Blog';
import About from './pages/About';
import Services from './pages/Services';
import EventsFeed from './pages/EventsFeed';
import NotFound from './pages/NotFound';
import Partner from './pages/Partner';
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence, motion } from 'framer-motion';
import LoginPage from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  console.log("App loaded!");
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">

    
    
      <div className="App">
      {location.pathname !== '/login' && <Navbar />} {/* Hide Navbar on login page */}
        <ScrollToTop />
        {/* Navbar */}
        <Navbar />


        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogFeed />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/events" element={<EventsFeed />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* Add more routes as needed */}

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer */}
        
        {location.pathname !== '/login' && <Footer />} {/* Hide Footer on login page */}
      </div>
    
    </AnimatePresence>
  );
}

export default App;
