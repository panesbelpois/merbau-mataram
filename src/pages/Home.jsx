import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Web Kecamatan KKN</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
                {/* Menu Card: Profil Desa */}
                <div
                    onClick={() => navigate('/profil')}
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden group"
                >
                    <div className="h-48 bg-blue-600 flex items-center justify-center">
                        <svg className="w-20 h-20 text-white opacity-80 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                    <div className="p-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Profil Desa</h2>
                        <p className="text-gray-600">Jelajahi informasi lengkap mengenai profil, geografi, dan potensi desa.</p>
                        <span className="inline-block mt-4 text-blue-600 font-semibold group-hover:underline">Lihat Detail &rarr;</span>
                    </div>
                </div>

                {/* Placeholder Card Lainnya */}
                <div className="bg-white rounded-xl shadow-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-8 opacity-60">
                    <span className="text-gray-400 font-medium text-lg">Menu Lain (Coming Soon)</span>
                </div>
            </div>
        </div>
    );
};

export default Home;
