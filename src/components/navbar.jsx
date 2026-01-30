import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoLampung from '../assets/lampung-selatan.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menus = [
    { name: "Beranda", path: "/" },
    { name: "Desa", path: "/desa" },
    { name: "Kontak", path: "/kontak" },
  ];

  const isActive = (path) => location.pathname === path;

    return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 font-poppins ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/10 py-2"
          : "bg-red-900 shadow-md py-4"
        }`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">

          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Glow Merah di belakang logo */}
              <div className={`absolute inset-0 rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity ${scrolled ? 'bg-red-300' : 'bg-red-600'}`}></div>
              <img
                className="h-10 w-auto relative z-10 transform group-hover:rotate-6 transition-transform duration-300"
                src={LogoLampung}
                alt="Logo"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                Merbau Mataram
              </span>
                  <span className={`text-[10px] font-medium tracking-wider uppercase ${scrolled ? 'text-red-700' : 'text-red-100'}`}>
                Lampung Selatan
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU (Kapsul Biru) */}
          <div className="hidden md:flex items-center gap-2">
            <div className={`flex p-1 rounded-full border transition-all duration-300 ${scrolled ? 'bg-red-50 border-red-200' : 'bg-white/10 border-white/20'}`}>
              {menus.map((menu) => (
                <Link
                  key={menu.name}
                  to={menu.path}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${scrolled 
                      ? isActive(menu.path) 
                        ? "bg-red-700 text-white shadow-md"
                        : "text-gray-700 hover:text-red-700 hover:bg-red-100"
                      : isActive(menu.path)
                        ? "bg-white text-red-900 shadow-md"
                        : "text-white hover:bg-white/10"
                    }`}
                >
                  {menu.name}
                </Link>
              ))}
            </div>
          </div>

          {/* MOBILE MENU BUTTON (Biru) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-white bg-white/20 hover:bg-white/30 transition-colors focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN (Posisi Diperbaiki: Otomatis di bawah Header) */}
      <div
        className={`md:hidden absolute top-full left-4 right-4 mt-2 bg-red-900 rounded-3xl border border-black shadow-xl shadow-black/40 overflow-hidden transition-all duration-300 origin-top transform ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="p-4 flex flex-col gap-2">
          {menus.map((menu) => (
            <Link
              key={menu.name}
              to={menu.path}
              onClick={() => setIsOpen(false)}
              // Style item menu tetap rapi dan imut
              className={`flex items-center justify-between px-5 py-3 rounded-2xl font-semibold transition-all ${isActive(menu.path)
                  ? "bg-red-950 text-white pl-7"
                  : "text-white hover:bg-red-800 hover:text-white hover:pl-7"
                }`}
            >
              {menu.name}
              {isActive(menu.path) && (
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;