import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 bg-white shadow-md text-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 cursor-pointer">
                        <Link to="/" className="text-2xl font-bold tracking-wider text-blue-600 hover:text-blue-800 transition-colors">
                            KECAMATAN KKN
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link to="/" className="hover:text-blue-600 transition-colors duration-200 font-medium">Beranda</Link>
                            <Link to="/profil" className="hover:text-blue-600 transition-colors duration-200 font-medium">Profil Desa</Link>
                            <a href="#" className="hover:text-blue-600 transition-colors duration-200 font-medium">Potensi</a>
                            <a href="#" className="hover:text-blue-600 transition-colors duration-200 font-medium">Galeri</a>
                            <a href="#" className="hover:text-blue-600 transition-colors duration-200 font-medium">Kontak</a>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md hover:text-blue-600 focus:outline-none transition-colors"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state. */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                id="mobile-menu"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-inner">
                    <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 hover:bg-gray-50 transition-colors">Beranda</Link>
                    <Link to="/profil" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 hover:bg-gray-50 transition-colors">Profil Desa</Link>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 hover:bg-gray-50 transition-colors">Potensi</a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 hover:bg-gray-50 transition-colors">Galeri</a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 hover:bg-gray-50 transition-colors">Kontak</a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
