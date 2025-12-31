import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [list, setList] = useState(false);
  const navigation = useNavigate(); 
  const menuRef = useRef(null);
  const desktopMenuRef = useRef(null);

  const handleNavigate = (path) => {
    navigation(path);
    setList(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isInsideMobile = menuRef.current && menuRef.current.contains(event.target);
      const isInsideDesktop = desktopMenuRef.current && desktopMenuRef.current.contains(event.target);

      if (!isInsideMobile && !isInsideDesktop) {
        setList(false);
      }
    };

    if (list) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [list]);

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm'>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4 md:py-5'>
        
        <img 
          onClick={() => handleNavigate("/")} 
          className='h-5 md:h-6 cursor-pointer object-contain hover:opacity-80 transition-opacity' 
          src="images/Herodha.png" 
          alt="Herodha Logo" 
        />

        <div className='hidden lg:flex items-center gap-10 text-[14px] text-gray-500 font-medium'>
          <h3 onClick={() => handleNavigate("/about")} className='hover:text-blue-600 cursor-pointer transition-all hover:translate-y-[-1px]'>About</h3>
          <h3 onClick={() => handleNavigate("/product")} className='hover:text-blue-600 cursor-pointer transition-all hover:translate-y-[-1px]'>Products</h3>
          <h3 onClick={() => handleNavigate("/pricing")} className='hover:text-blue-600 cursor-pointer transition-all hover:translate-y-[-1px]'>Pricing</h3>
          <h3 onClick={() => handleNavigate("/support")} className='hover:text-blue-600 cursor-pointer transition-all hover:translate-y-[-1px]'>Support</h3>
      
          <div className='relative ml-4' ref={desktopMenuRef}>
            <button onClick={() => setList(!list)} className='focus:outline-none'>
              <img className='h-6 w-6 cursor-pointer opacity-60 hover:opacity-100 transition-opacity' src="images/menu-line.png" alt="Account Menu" />
            </button>
            {list && (
              <div className='absolute right-0 top-full mt-4 w-48 bg-white border border-gray-100 rounded shadow-xl py-2 animate-in fade-in zoom-in-95 duration-200'>
                <p onClick={() => handleNavigate("/signup")} className="px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer">Sign Up</p>
                <p onClick={() => handleNavigate("/login")} className="px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer">Login</p>
              </div>
            )}
          </div>
        </div>

        <div className='lg:hidden relative' ref={menuRef}>
          <button onClick={() => setList(!list)} className='p-2 focus:outline-none'>
            <img className='h-6 w-6 cursor-pointer' src="images/menu-line.png" alt="Menu" />
          </button>
          
          {list && (
            <div className='absolute right-0 top-full mt-2 w-64 bg-white border border-gray-100 rounded-lg shadow-2xl py-3 z-50 animate-in slide-in-from-top-2 duration-200'>
               <p onClick={() => handleNavigate("/signup")} className="px-6 py-4 text-base font-medium text-blue-600 hover:bg-gray-50 cursor-pointer border-b border-gray-50">Sign Up</p>
               <p onClick={() => handleNavigate("/login")} className="px-6 py-4 text-base font-medium text-blue-600 hover:bg-gray-50 cursor-pointer border-b border-gray-50">Login</p>
               <p onClick={() => handleNavigate("/about")} className="px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer">About</p>
               <p onClick={() => handleNavigate("/product")} className="px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer">Products</p>
               <p onClick={() => handleNavigate("/pricing")} className="px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer">Pricing</p>
               <p onClick={() => handleNavigate("/support")} className="px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer">Support</p>
            </div>
          )}
        </div>

      </div>
    </nav>
  )
}

export default Navbar
