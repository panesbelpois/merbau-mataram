import React from 'react';
import { Link } from 'react-router-dom';
import LogoLampung from '../assets/lampung-selatan.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-0 font-poppins">

      {/* Full-width blue card (keep colors unchanged) */}
      <div className="w-full bg-transparent py-8">
        <div className="w-full px-6 lg:px-12">
          <div className="bg-sky-500 rounded-[1.5rem] p-6 md:p-8 flex flex-col relative overflow-hidden shadow-xl shadow-sky-200 mb-6">

          {/* Hiasan background abstrak (keep as-is) */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-sky-300 opacity-20 blur-3xl"></div>

          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-8">

              {/* Swap: Logo + description + menus (left) */}
              <div className="md:col-span-5 space-y-4 text-white">
                <div className="flex items-center gap-3">
                  <img src={LogoLampung} alt="Logo" className="h-12 w-auto" />
                  <div className="flex flex-col">
                    <span className="font-bold text-white text-xl tracking-tight">Merbau Mataram</span>
                    <span className="text-xs font-medium text-sky-100 tracking-wider">LAMPUNG SELATAN</span>
                  </div>
                </div>

                <p className="text-sky-50 text-sm leading-relaxed">
                  Website ini dikembangkan oleh <span className="font-bold text-white">KKNT 60 ITERA</span> sebagai langkah digitalisasi daerah guna menyajikan informasi publik yang transparan dan mudah dijangkau oleh siapa saja.
                </p>
              </div>

              {/* Layanan Informasi + kontak (right) */}
              <div className="md:col-span-7 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start text-white">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-1">Layanan Informasi</h2>
                  <p className="text-sky-50 text-sm md:text-base opacity-90 leading-relaxed mb-4">
                    Silakan hubungi kami jika anda memiliki pertanyaan atau membutuhkan bantuan terkait pelayanan kecamatan.
                  </p>

                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm opacity-90">Alamat Kantor</h4>
                        <p className="font-semibold">G9XJ+RHC, Merbau Mataram, South Lampung Regency, Lampung 35357</p>
                      </div>
                    </div>

                    <div className="h-px bg-white/10 w-full my-1"></div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm opacity-90">Email Resmi</h4>
                        <p className="font-semibold">kecamatan@merbaumataram.go.id</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-4 text-lg">Menu Utama</h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/" className="text-sky-100 hover:text-white transition-colors">Beranda</Link>
                    </li>
                    <li>
                      <Link to="/desa" className="text-sky-100 hover:text-white transition-colors">Profil Desa</Link>
                    </li>
                    <li>
                      <Link to="/kontak" className="text-sky-100 hover:text-white transition-colors">Kontak</Link>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Bottom row inside blue card */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4">
              <p className="text-xs text-sky-100 font-medium">
                &copy; {new Date().getFullYear()} Kecamatan Merbau Mataram. All rights reserved.
              </p>

              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-wider text-sky-100 font-bold">Powered by</span>
                <a
                  href="https://www.instagram.com/kkntmerbaumataram/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-white bg-white/10 px-3 py-1 rounded-md hover:opacity-90 transition-opacity"
                >
                  KKNT 60 ITERA 2026
                </a>
              </div>
            </div>

          </div>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;