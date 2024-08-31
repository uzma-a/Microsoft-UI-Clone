import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Simulate sign-up process
      console.log('Sign Up:', { name, email, password });
      navigate('/home');
    } catch (error) {
      console.error("Error signing up: ", error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Simulate login process
      console.log('Login:', { email, password });
      navigate('/home');
    } catch (error) {
      console.error("Error logging in: ", error.message);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen p-4 bg-gray-100'>
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full max-w-md">
        <h1 className='text-2xl font-semibold mb-4'>{isSignUp ? 'Sign Up' : 'Login'}</h1>
        <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
          {isSignUp && (
            <input 
              className='w-full h-12 border border-gray-300 rounded-md p-3 mb-4' 
              type="text" 
              placeholder='Your Name' 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          )}
          <input 
            className='w-full h-12 border border-gray-300 rounded-md p-3 mb-4' 
            type="email" 
            placeholder='Email Address' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <div className='relative mb-4'>
            <input 
              className='w-full h-12 border border-gray-300 rounded-md p-3 pr-12' 
              type={showPassword ? "text" : "password"} 
              placeholder='Password' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <span 
              className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer' 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button type="submit" className='w-full h-12 bg-gray-800 text-white text-lg rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600'>
            {isSignUp ? 'Continue' : 'Login'}
          </button>
        </form>
        <p className='mt-4 text-center'>
          {isSignUp ? (
            <>
              Already have an account? 
              <span 
                className='font-semibold cursor-pointer hover:underline' 
                onClick={() => setIsSignUp(false)}
              >
                Login here
              </span>
            </>
          ) : (
            <>
              Don't have an account? 
              <span 
                className='font-semibold cursor-pointer hover:underline' 
                onClick={() => setIsSignUp(true)}
              >
                Sign up here
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
