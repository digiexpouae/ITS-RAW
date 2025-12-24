import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ENDPOINTS from '@/utils/ENDPOINTS';
import Link from 'next/link';
// import { useAuth } from '@clerk/nextjs';
import { useApi } from '@/function';
import { useAuth } from '@clerk/nextjs'
import { usePathname } from 'next/navigation';

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton, useUser
} from '@clerk/nextjs'
import Image from 'next/image';
import {
  Settings,
  Send,
  Info,
  Menu,
  X,
  Home,
  LayoutDashboard,
  Utensils,
  PlusCircle
} from 'lucide-react';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [token, Settoken] = useState(null)
  const [credits, setCredits] = useState(0);
  const [sentCredits, setSentCredits] = useState(0);
  const { getToken } = useAuth()
  const { GETDATA } = useApi();

  const { isSignedIn, isLoaded } = useUser()
  const pathname = usePathname();
  const isHome = pathname === '/';

  const sendCredits = async () => {
    // Only send credits if signed in
    if (!isSignedIn || token == null) return;

    try {
      const response = await GETDATA(ENDPOINTS.OTHER.SEND_CREDITS);
      if (response) {
        setSentCredits(response);
        console.log("credit", response);
      }
    } catch (error) {
      console.error("Failed to send credits:", error);
    }
  };

  const getCredits = async () => {
    if (!isSignedIn || token == null) return;

    try {
      const response = await GETDATA(ENDPOINTS.OTHER.GENERATE_CREDITS);
      if (response) {
        setCredits(response);
        console.log("credit", response);
        return response;
      }
    } catch (error) {
      console.error("Failed to get credits:", error);
    }
  };



  useEffect(() => {
    // Ensure user state is loaded
    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768; // md breakpoint
    if (!isDesktop) return
    if (!isLoaded || !isSignedIn || token == null) return;
    ;
    const authorization = async () => {

      getCredits();
      sendCredits();

    }
    authorization()
    // Cleanup in case component unmounts before timeout
  }, [isLoaded, isSignedIn]); // depends on both



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

  const menuRef = useRef(null);

  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      const menuItems = menuRef.current.querySelectorAll('.menu-item');
      gsap.fromTo(
        menuItems,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.3
        }
      );
    }
  }, [isMenuOpen]);


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
          <div className="md:hidden  flex items-center gap-4">
            {/* {isSignedIn && !isHome && (
              <div className="flex items-center gap-2 text-black bg-gray-100/50 px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                <div className="flex items-center gap-1">
                  <Settings className="w-3.5 h-3.5" />
                  <span className="text-xs font-semibold">{credits}</span>
                </div>
                <div className="w-px h-3 bg-gray-300 mx-1"></div>
                <div className="flex items-center gap-1">
                  <Send className="w-3.5 h-3.5" />
                  <span className="text-xs font-semibold">{sentCredits}</span>
                </div>
              </div>
            )} */}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-all duration-300 active:scale-95 relative z-100001"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 z-100000 transition-all duration-500 ease-in-out ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
          {/* Backdrop with Blur */}
          <div
            className={`absolute inset-0 bg-white/80 backdrop-blur-xl transition-opacity duration-500 ${isMenuOpen ? "opacity-100" : "opacity-0"
              }`}
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Menu Panel */}
          <div
            ref={menuRef}
            className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${isMenuOpen ? "translate-x-0" : "translate-x-full"
              } flex flex-col p-8`}
          >
            {/* Logo in Menu */}
            <div className="mb-10 pt-4 flex justify-between items-center menu-item">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <Image src={'/assets/home/r-logo.svg'} height={40} width={100} priority className='object-contain' />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-2 mb-8">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 menu-item">Main Menu</p>

              <Link
                href="/"
                className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-200 menu-item ${pathname === '/' ? "bg-black text-white shadow-lg" : "text-gray-600 hover:bg-gray-100"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className={`w-5 h-5 ${pathname === '/' ? "text-white" : "text-gray-400"}`} />
                <span className="font-semibold text-lg">Home</span>
              </Link>

              {isSignedIn &&
                navLinks.map((link) => {
                  const Icon = link.name === 'Dashboard' ? LayoutDashboard :
                    link.name === 'Restaurant Info' ? Utensils :
                      link.name === 'New' ? PlusCircle : Settings;

                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-200 menu-item ${pathname === link.path ? "bg-black text-white shadow-lg" : "text-gray-600 hover:bg-gray-100"
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className={`w-5 h-5 ${pathname === link.path ? "text-white" : "text-gray-400"}`} />
                      <span className="font-semibold text-lg">{link.name}</span>
                    </Link>
                  );
                })}
            </div>

            {/* Account Section */}
            <div className="mt-auto pt-8 border-t border-gray-100 menu-item">
              {isSignedIn ? (
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <UserButton />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-900">My Account</span>
                        <span className="text-[10px] text-gray-500">Manage profile</span>
                      </div>
                    </div>
                  </div>

                  {!isHome && (
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 p-4 rounded-2xl flex flex-col gap-1 items-center justify-center">
                        <Settings className="w-5 h-5 text-gray-400" />
                        <span className="text-lg font-bold text-gray-900">{credits}</span>
                        <span className="text-[10px] uppercase font-bold text-gray-500 tracking-tight">Generation</span>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-2xl flex flex-col gap-1 items-center justify-center">
                        <Send className="w-5 h-5 text-gray-400" />
                        <span className="text-lg font-bold text-gray-900">{sentCredits}</span>
                        <span className="text-[10px] uppercase font-bold text-gray-500 tracking-tight">Sending</span>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <SignInButton>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full bg-white border-2 border-black text-black font-bold px-6 py-4 rounded-2xl hover:bg-gray-50 transition-colors"
                    >
                      Login
                    </button>
                  </SignInButton>

                  <SignUpButton>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full bg-black text-white font-bold px-6 py-4 rounded-2xl shadow-xl shadow-black/20 hover:bg-zinc-800 transition-colors"
                    >
                      Create Account
                    </button>
                  </SignUpButton>
                </div>
              )}
            </div>

            {/* Footer Tagline */}
            <div className="mt-8 text-center px-4 menu-item">
              <p className="text-[10px] text-gray-400 font-medium">© 2025 ITS-RAW. All rights reserved.</p>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;