import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [menu, setMenu] = useState("microsoft");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='bg-gray-800 h-20 text-gray-50 w-full flex flex-col md:flex-row items-center justify-between p-4 md:p-8 font-poppins'>
      {/* Logo and Menu Button */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="logo text-gray-50 flex items-center cursor-pointer gap-2">
          <img 
            src="https://cdn.iconscout.com/icon/free/png-256/free-microsoft-7662314-6297250.png" 
            className='shrink-0' 
            height={28} 
            width={34} 
            alt="" 
          />
          <p 
            className='text-2xl md:text-3xl font-bold text-gray-200 cursor-pointer mr-16' 
            onClick={() => setMenu("microsoft")}
          >
            <Link to='/'>Microsoft</Link>
            {menu === "microsoft" && <hr className='mt-1 border-t-2 border-gray-200' />}
          </p>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className='md:hidden flex items-center justify-center p-2'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className='w-6 h-6 text-gray-50' 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none"
          >
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex gap-8 items-center justify-between w-full'>
        <div className="flex items-center gap-6">
          <div className="free flex items-center gap-1">
            <p 
              className='hover:underline underline-offset-8 decoration-2' 
              onClick={() => setMenu("microsoft365")}
            >
              <Link to='/microsoft365'>Microsoft 365</Link>
              {menu === "microsoft365" && <hr className='mt-1 border-t-2 border-gray-200' />}
            </p>
            <span className='text-black p-0.5 bg-yellow-400 font-semibold'>Free</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to='/login'>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded-md z-20">
              <svg className='w-6 h-6 text-gray-50 hover:text-gray-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M7.78256 17.1112C6.68218 17.743 3.79706 19.0331 5.55429 20.6474C6.41269 21.436 7.36872 22 8.57068 22H15.4293C16.6313 22 17.5873 21.436 18.4457 20.6474C20.2029 19.0331 17.3178 17.743 16.2174 17.1112C13.6371 15.6296 10.3629 15.6296 7.78256 17.1112Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.5 10C15.5 11.933 13.933 13.5 12 13.5C10.067 13.5 8.5 11.933 8.5 10C8.5 8.067 10.067 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2.854 16C2.30501 14.7664 2 13.401 2 11.9646C2 6.46129 6.47715 2 12 2C17.5228 2 22 6.46129 22 11.9646C22 13.401 21.695 14.7664 21.146 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>Login</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className=' absolute md:hidden flex flex-col items-center w-full mt-12 bg-gray-800  p-4 rounded-lg'>
          <li className='py-2'>
            <Link to='/microsoft365' onClick={() => setIsMenuOpen(false)}>Microsoft 365</Link>
          </li>
          {/* Mobile Login Button */}
          <div className="mt-4">
            <Link to='/login'>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded-md z-20">
                <svg className='w-6 h-6 text-gray-50 hover:text-gray-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path d="M7.78256 17.1112C6.68218 17.743 3.79706 19.0331 5.55429 20.6474C6.41269 21.436 7.36872 22 8.57068 22H15.4293C16.6313 22 17.5873 21.436 18.4457 20.6474C20.2029 19.0331 17.3178 17.743 16.2174 17.1112C13.6371 15.6296 10.3629 15.6296 7.78256 17.1112Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15.5 10C15.5 11.933 13.933 13.5 12 13.5C10.067 13.5 8.5 11.933 8.5 10C8.5 8.067 10.067 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M2.854 16C2.30501 14.7664 2 13.401 2 11.9646C2 6.46129 6.47715 2 12 2C17.5228 2 22 6.46129 22 11.9646C22 13.401 21.695 14.7664 21.146 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span>Login</span>
              </button>
            </Link>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
