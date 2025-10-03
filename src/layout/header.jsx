import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header 
      className={`top-0 z-50 left-0 w-full fixed h-[15vh] transition-all duration-300  ${
        isScrolled ? 'bg-white shadow-md ' : 'bg-transparent '
      }`}
    >
      <div className="container mx-auto h-full  w-[80%]">
        <div className="flex items-center h-full justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 w-[50%] sm:w-[40%] md:w-[20%] h-[70px]">

             <Image src={'/assets/home/r-logo.svg'} height={100} width={140} className='object-cover'/>
          </div>

          {/* Desktop Navigation */}
          {/* <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                // to={link.path}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {link.name}
              </div>
            ))}
          </nav> */}

          {/* Contact Button */}
          <div className="hidden md:flex gap-2 ">
            <button className="bg-[#000000] hover:bg-zinc-500 cursor-pointer  text-white px-6 py-2 rounded-md font-medium transition-colors duration-200">
            Signup
            </button>
            <button className="bg-white-600 hover:bg-zinc-100 cursor-pointer border text-black px-6 py-2 rounded-md font-medium transition-colors duration-200">
              Login
            </button>
          </div>
        

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              // onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium mt-2">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;