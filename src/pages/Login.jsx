import React, { useState } from 'react';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';
import Logo from '../assets/CheveningSquare.png';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/heroBackground.jpg';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    // Placeholder for login logic
    console.log('Login attempted', { email, password, rememberMe });
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
      <div className="w-90 max-w-md p-6 bg-white rounded-md border border-gray-200 flex flex-col justify-center items-center gap-4">
        {/* Logo - replace with your actual logo path */}
        <img 
          src={Logo} 
          alt="Logo" 
          className="w-20 max-w-full h-auto"
        />
        
        <div className="text-center text-black text-xs font-inter w-full">
          Welcome Back!
        </div>
        
        <div className="w-full flex flex-col items-center gap-8">
          <div className="text-center w-full">
            <span className="text-slate-500 text-sm font-inter">
              Don't have an account yet? 
            </span>
            <Link to="/signup" className="text-blue-600 text-sm font-inter ml-1"> Sign Up Now</Link>
          </div>
          
          <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
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
                required
                className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-950 text-slate-500"
              />
            </div>
            
            {/* Password Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="text-slate-400" size={20} />
              </div>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-10 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-950 text-slate-500"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="text-slate-400" size={20} />
                ) : (
                  <Eye className="text-slate-400" size={20} />
                )}
              </button>
            </div>
            
            {/* Login Button */}
            <button 
              type="submit" 
              className="w-full py-2 bg-slate-950 text-white rounded-md text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
        
        {/* Remember Me and Forgot Password */}
        <div className="w-full flex justify-between items-center">
          <label className="flex items-center gap-2 text-black text-sm font-inter">
            <input 
              type="checkbox" 
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="w-4 h-4 text-slate-950 rounded focus:ring-slate-950"
            />
            Remember Me
          </label>
          <Link 
            to="/forgot-password" 
            className="text-blue-600 text-sm font-inter"
          >
            Forgot Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;