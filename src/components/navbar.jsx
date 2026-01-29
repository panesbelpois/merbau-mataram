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
    { name: "Potensi", path: "/potensi" },
    { name: "Galeri", path: "/galeri" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg shadow-sky-200/20 py-2"
          : "bg-white py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="font-bold text-merbau-dark text-lg leading-tight transition-colors">
                Merbau Mataram
              </span>
              <span className="text-[10px] text-merbau-text font-medium tracking-wider uppercase">
                Lampung Selatan
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU (Kapsul Biru) */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex bg-sky-50/80 p-1 rounded-full border border-sky-100">
              {menus.map((menu) => (
                <Link
                  key={menu.name}
                  to={menu.path}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isActive(menu.path)
                      ? "bg-white text-merbau-primary shadow-sm shadow-sky-100"
                      : "text-merbau-text hover:text-merbau-primary hover:bg-white/60"
                    }`}
                >
                  {menu.name}
                </Link>
              ))}
            </div>

            {/* Tombol Kontak Gradient Biru Laut */}
            <Link
              to="/kontak"
              className="ml-3 flex items-center gap-2 bg-gradient-to-r from-sky-400 to-blue-500 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-sky-200 hover:shadow-sky-300 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
              </svg>
              Kontak
            </Link>
          </div>

          {/* MOBILE MENU BUTTON (Biru) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-merbau-primary bg-sky-50 hover:bg-sky-100 transition-colors focus:outline-none"
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
                  ? "bg-sky-50 text-sky-700 pl-7"
                  : "text-gray-600 hover:bg-sky-50/50 hover:text-sky-500 hover:pl-7"
                }`}
            >
              {menu.name}
              {isActive(menu.path) && (
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              )}
            </Link>
          ))}

          <div className="h-px bg-sky-100 my-1 mx-4"></div>

          {/* TOMBOL HUBUNGI KAMI (Biru & Jelas) */}
          <Link
            to="/kontak"
            onClick={() => setIsOpen(false)}
            className="text-center bg-sky-400 text-white py-3 rounded-2xl font-bold shadow-lg shadow-sky-200 hover:bg-sky-500 active:scale-95 transition-transform"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;