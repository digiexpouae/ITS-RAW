import React, { useState, useEffect } from 'react';
// import { GETDATA } from '@/function';
import ENDPOINTS from '@/utils/ENDPOINTS';
import Link from 'next/link';
// import { useAuth } from '@clerk/nextjs';
import { useApi } from '@/function';
import { usePathname } from 'next/navigation';

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton, useUser
} from '@clerk/nextjs'
import Image from 'next/image';
import { Settings, Send, Info } from 'lucide-react';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [credits, setCredits] = useState(0);
  const [sentCredits, setSentCredits] = useState(0);
  // const { getToken } = useAuth()
  const { GETDATA } = useApi();
  const pathname = usePathname();
  const isHome = pathname === '/';
  const getCredits = async () => {

    // const token = await getToken()
    const response = await GETDATA(ENDPOINTS.OTHER.GENERATE_CREDITS)
    if (response) {
      setCredits(response)
      return response
      console.log("credit" + response)
    }
  }
  const sendCredits = async () => {

    // const token = await getToken()
    const response = await GETDATA(ENDPOINTS.OTHER.SEND_CREDITS)
    if (response) {
      setSentCredits(response)
      console.log("credit" + response)
    }
  }

  useEffect(() => {
    getCredits()
    sendCredits()
  }, [])

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
    { name: 'Dashboard', path: '/dashboard-dashboard' },

    { name: 'Restaurant Info', path: '/restaurant' },
    { name: 'New', path: '/new' },
  ];

  const { isSignedIn, isLoaded } = useUser()

  return (
    <header
      className={`top-0 z-50 left-0 w-full h-[15vh] transition-all duration-300
       bg-transparent`}
    >
      <div className="container mx-auto h-full  w-[80%]">
        <div className="flex items-center h-full w-full justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 w-[50%] sm:w-[40%] md:w-[20%] h-[70px]">
            <Link href="/">
              <Image src={'/assets/home/r-logo.svg'} height={100} width={140} priority className='object-cover' />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-end w-[60%] space-x-4">
            {isSignedIn && !isHome &&
              <div className="flex items-center gap-2  text-black px-5 py-2 rounded-xl mr-4">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  <span className="font-medium">{credits}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  <span className="font-medium">{sentCredits}</span>
                </div>
                <div className="relative group cursor-pointer">
                  <Info className="w-5 h-5" />

                  <div className="absolute right-0 top-full mt-4 w-max bg-[#fcd8d8] p-4 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 text-[#1a1a1a]">
                    <div className="absolute -top-2 right-1 w-4 h-4 bg-[#fcd8d8] rotate-45"></div>

                    <div className="relative z-10">
                      <div className="flex flex-col gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <Settings className="w-4 h-4" />
                          <span className="font-medium text-sm">{credits} generation credits</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          <span className="font-medium text-sm">{sentCredits} send credits</span>
                        </div>
                      </div>

                      <div className="text-xs mt-2 max-w-64 space-y-2">
                        <p className="font-bold">Credits work on a rolling schedule.</p>
                        <p>Generation credits renew daily and sending credits renew monthly.</p>
                        <p>Example: a sending credit used on the 15th becomes available again on the 15th of next month
                          while your subscription is active.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>}

            {isSignedIn &&
              navLinks.map((link) => (
                <div
                  key={link.name}
                  className="hover:text-gray-700 font-medium uppercase cursor-pointer transition-colors duration-200"
                >
                  <Link href={link.path}>{link.name}</Link>
                </div>
              ))
            }
            <div className="hidden md:flex gap-2 ">

              {isSignedIn && <div className="w-[70px] h-[40px] flex items-center  relative">  <UserButton /></div>}

              {!isSignedIn && (
                <>
                  <SignInButton >
                    <button className="bg-white-600 hover:bg-zinc-100 cursor-pointer border text-black px-6 py-2 rounded-md font-medium transition-colors duration-200">
                      Login
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="bg-[#000000] hover:bg-zinc-500 cursor-pointer  text-white px-6 py-2 rounded-md font-medium transition-colors duration-200">
                      Signup
                    </button>
                  </SignUpButton>
                </>
              )
              }


            </div>

          </nav>

          {/* Contact Button */}


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