import React from 'react';
import { Link } from 'react-router-dom';
import LogoLampung from '../assets/lampung-selatan.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. BAGIAN KONTAK (PENGGANTI NEWSLETTER) */}
        {/* Tetap menggunakan desain Rounded Besar warna Biru yang kamu suka */}
        <div className="bg-sky-500 rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-sky-200 mb-16 relative overflow-hidden">
          
          {/* Hiasan background abstrak */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-sky-300 opacity-20 blur-3xl"></div>

          {/* Teks Kiri: Judul Kontak */}
          <div className="text-white relative z-10 text-center md:text-left max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Layanan Informasi</h2>
            <p className="text-sky-50 text-sm md:text-base opacity-90 leading-relaxed">
              Silakan hubungi kami jika anda memiliki pertanyaan atau membutuhkan bantuan terkait pelayanan kecamatan.
            </p>
          </div>

          {/* Bagian Kanan: Detail Kontak (Alamat & Email) */}
          <div className="w-full md:w-auto relative z-10 flex flex-col gap-4 bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm">
             
             {/* Item Kontak 1: Alamat */}
             <div className="flex items-start gap-4 text-white">
                <div className="bg-white/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm opacity-80">Alamat Kantor</h4>
                  <p className="font-semibold">Merbau Mataram, Kec. Merbau Mataram, Kabupaten Lampung Selatan, Lampung</p>
                </div>
             </div>

             <div className="h-px bg-white/20 w-full my-1"></div>

             {/* Item Kontak 2: Email */}
             <div className="flex items-start gap-4 text-white">
                <div className="bg-white/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm opacity-80">Email Resmi</h4>
                  <p className="font-semibold">kecamatan@merbaumataram.go.id</p>
                </div>
             </div>

          </div>
        </div>

        {/* 2. BAGIAN MENU & DESKRIPSI (Updated) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-gray-200 pb-12">
          
          {/* Deskripsi (Mengikuti gaya Rejosari) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img src={LogoLampung} alt="Logo" className="h-12 w-auto" />
              <div className="flex flex-col">
                 <span className="font-bold text-slate-800 text-xl tracking-tight">Merbau Mataram</span>
                 <span className="text-xs font-medium text-slate-800 tracking-wider">LAMPUNG SELATAN</span>
              </div>
            </div>
            
            {/* Teks Deskripsi KKN (Sesuai Request) */}
            <p className="text-slate-500 text-sm leading-relaxed bg-sky-50 p-4 rounded-2xl border border-sky-100">
              Website ini dikembangkan oleh <span className="font-bold text-sky-600">KKNT 60 ITERA</span> sebagai langkah digitalisasi daerah guna menyajikan informasi publik yang transparan dan mudah dijangkau oleh siapa saja.
            </p>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Link Columns (Hanya Menu Utama & Bantuan) */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8">
            
            {/* Kolom 1: Menu Utama */}
            <div>
              <h4 className="font-bold text-slate-800 mb-4 text-lg">Menu Utama</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link to="/" className="hover:text-sky-500 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sky-300 rounded-full"></span>Beranda</Link></li>
                <li><Link to="/profil" className="hover:text-sky-500 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sky-300 rounded-full"></span>Profil Desa</Link></li>
                <li><Link to="/potensi" className="hover:text-sky-500 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sky-300 rounded-full"></span>Potensi</Link></li>
                <li><Link to="/galeri" className="hover:text-sky-500 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sky-300 rounded-full"></span>Galeri</Link></li>
              </ul>
            </div>

            {/* Kolom 2: Bantuan */}
            <div>
              <h4 className="font-bold text-slate-800 mb-4 text-lg">Bantuan</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link to="/kontak" className="hover:text-sky-500 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sky-300 rounded-full"></span>Hubungi Kami</Link></li>
                <li><Link to="/peta" className="hover:text-sky-500 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sky-300 rounded-full"></span>Peta Lokasi</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* 3. COPYRIGHT */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-xs text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} Kecamatan Merbau Mataram. All rights reserved.
          </p>
          
          {/* Tagline Credit KKN */}
          <div className="flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-gray-100 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Powered by</span>
            <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-md">
              KKNT 60 ITERA 2026
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;