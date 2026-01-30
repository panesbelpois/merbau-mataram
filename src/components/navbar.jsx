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
          ? "bg-white/80 backdrop-blur-md shadow-lg shadow-sky-200/20 py-2"
          : "bg-white shadow-md py-4"
        }`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">

          {/* LOGO SECTION */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Glow Biru di belakang logo */}
              <div className="absolute inset-0 bg-sky-200 rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity"></div>
              <img
                className="h-10 w-auto relative z-10 transform group-hover:rotate-6 transition-transform duration-300"
                src={LogoLampung}
                alt="Logo"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-gray-800">
                Merbau Mataram
              </span>
                  <span className="text-[10px] font-medium tracking-wider uppercase text-gray-600">
                Lampung Selatan
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU (Kapsul Biru) */}
          <div className="hidden md:flex items-center gap-2">
            <div className={`flex p-1 rounded-full border transition-all duration-300 ${scrolled ? 'bg-sky-100 border-sky-200' : 'bg-sky-100/20 border-sky-200/20'}`}>
              {menus.map((menu) => (
                <Link
                  key={menu.name}
                  to={menu.path}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${scrolled 
                      ? isActive(menu.path) 
                        ? "bg-sky-500 text-white shadow-md shadow-sky-300"
                        : "text-gray-700 hover:text-sky-600 hover:bg-sky-50"
                      : isActive(menu.path)
                        ? "bg-sky-500 text-white shadow-md"
                        : "text-gray-700 hover:bg-sky-100"
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
              className="p-2 rounded-full text-merbau-primary bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none"
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
        className={`md:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-3xl border border-sky-100 shadow-xl shadow-sky-500/10 overflow-hidden transition-all duration-300 origin-top transform ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
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
                  ? "bg-gray-100 text-gray-700 pl-7"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-700 hover:pl-7"
                }`}
            >
              {menu.name}
              {isActive(menu.path) && (
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;