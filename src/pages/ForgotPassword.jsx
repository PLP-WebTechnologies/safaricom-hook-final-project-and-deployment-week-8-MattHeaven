import React, { useState } from 'react';
import { Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/heroBackground.jpg';
import Logo from '../assets/CheveningSquare.png';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      // Placeholder for password reset request
      // In a real application, this would be an API call
      console.log('Password reset requested for:', email);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Set submitted state to show success message
      setIsSubmitted(true);
    } catch (err) {
      setError('Failed to send reset link. Please try again.');
    }
  };

  // Reset form to allow another attempt
  const handleTryAgain = () => {
    setIsSubmitted(false);
    setEmail('');
    setError('');
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
          style={{
            backgroundImage: "url(" + backgroundImage + ")",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/80"></div>
        </div>
      <div className="w-90 max-w-md p-6 bg-white rounded-md border border-gray-200 flex flex-col justify-center items-center gap-6">
        {/* Logo */}
        <img 
          src={Logo} 
          alt="Logo" 
          className="w-20 max-w-full h-auto"
        />

        {/* Back to Login Link */}
        <div className="w-full">
          <Link 
            to="/login" 
            className="flex items-center text-slate-600 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Login
          </Link>
        </div>

        {/* Main Content */}
        {!isSubmitted ? (
          <div className="w-full text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Forgot Password
            </h2>
            <p className="text-slate-600 mb-6 text-sm">
              Enter the email address associated with your account. We'll send you a link to reset your password.
            </p>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
              {/* Email Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="text-slate-400" size={20} />
                </div>
                <input 
                  type="email" 
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-slate-500 
                    ${error 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-slate-300 focus:ring-slate-950'}`}
                />
                {error && (
                  <p className="text-red-500 text-xs mt-1">{error}</p>
                )}
              </div>
              
              {/* Send Reset Link Button */}
              <button 
                type="submit" 
                className="w-full py-2 bg-slate-950 text-white rounded-md text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                Send Reset Link
              </button>
            </form>
          </div>
        ) : (
          // Success State
          <div className="w-full text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Check Your Email
            </h2>
            <p className="text-slate-600 mb-6 text-sm">
              We've sent a password reset link to <span className="font-semibold">{email}</span>. 
              Please check your inbox and follow the instructions.
            </p>

            <div className="flex flex-col gap-4">
              <button 
                onClick={handleTryAgain}
                className="w-full py-2 border border-slate-300 text-slate-900 rounded-md text-sm font-medium hover:bg-slate-50 transition-colors"
              >
                Try Another Email
              </button>
              
              <Link 
                to="/login"
                className="w-full py-2 bg-slate-950 text-white rounded-md text-sm font-medium hover:bg-slate-800 transition-colors text-center"
              >
                Back to Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;