import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Phone, User } from 'lucide-react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }

    // Surname validation
    if (!formData.surname.trim()) {
      newErrors.surname = 'Surname is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Phone Number validation
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with sign up
      console.log('Form submitted', formData);
      // TODO: Implement actual sign up logic
    }
  };

  return (
    <div className="w-full h-screen bg-[#242E4F] flex flex-col justify-center items-center">
      <div className="w-90 max-w-md p-6 bg-white rounded-md border border-gray-200 flex flex-col justify-center items-center gap-4">
        {/* Logo */}
        <img 
          src="/assets/CheveningLogo.png" 
          alt="Logo" 
          className="w-60 max-w-full h-auto"
        />
        
        {/* Login Link */}
        <div className="w-full text-center text-sm text-slate-500 font-inter">
          Already have an account? {' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </div>
        
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          {/* First Name and Surname */}
          <div className="flex gap-2">
            <div className="relative w-1/2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="text-slate-400" size={20} />
              </div>
              <input 
                type="text" 
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-slate-500 
                  ${errors.firstName 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-slate-300 focus:ring-slate-950'}`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>
            
            <div className="relative w-1/2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="text-slate-400" size={20} />
              </div>
              <input 
                type="text" 
                name="surname"
                placeholder="Surname"
                value={formData.surname}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-slate-500 
                  ${errors.surname 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-slate-300 focus:ring-slate-950'}`}
              />
              {errors.surname && (
                <p className="text-red-500 text-xs mt-1">{errors.surname}</p>
              )}
            </div>
          </div>
          
          {/* Email Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="text-slate-400" size={20} />
            </div>
            <input 
              type="email" 
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-slate-500 
                ${errors.email 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-slate-300 focus:ring-slate-950'}`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          
          {/* Phone Number Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="text-slate-400" size={20} />
            </div>
            <input 
              type="tel" 
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-slate-500 
                ${errors.phoneNumber 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-slate-300 focus:ring-slate-950'}`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
            )}
          </div>
          
          {/* Password Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="text-slate-400" size={20} />
            </div>
            <input 
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 text-slate-500 
                ${errors.password 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-slate-300 focus:ring-slate-950'}`}
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <Eye className="text-slate-400" size={20} />
              ) : (
                <EyeOff className="text-slate-400" size={20} />
              )}
            </button>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          
          {/* Confirm Password Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="text-slate-400" size={20} />
            </div>
            <input 
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full pl-10 py-2 border rounded-md focus:outline-none focus:ring-2 text-slate-500 
                ${errors.confirmPassword 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-slate-300 focus:ring-slate-950'}`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
            )}
          </div>
          
          {/* Sign Up Button */}
          <button 
            type="submit" 
            className="w-full py-2 bg-slate-950 text-white rounded-md text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            Sign Up
          </button>
        </form>
        
        {/* Remember Me Checkbox */}
        <label className="flex items-center gap-2 text-black text-sm font-inter">
          <input 
            type="checkbox" 
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            className="w-4 h-4 text-slate-950 rounded focus:ring-slate-950"
          />
          Remember Me
        </label>
      </div>
    </div>
  );
};

export default SignUp;