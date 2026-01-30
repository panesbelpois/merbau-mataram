import React from 'react';
import { Link } from 'react-router-dom';
import { villages } from '../data/villages';

const Villages = () => {
    return (
        <div className="min-h-screen bg-white font-poppins">
            {/* Hero Section */}
            <section className="pt-20 pb-20 bg-white font-poppins">
                <div className="w-full px-6 lg:px-12 h-full flex items-center justify-center">
                    <div className="text-center mt-1 font-poppins">
                        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 font-poppins" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>Desa</h1>
                        <p className="text-2xl text-gray-700 max-w-2xl mx-auto" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }}>
                            Jelajahi 15 desa yang membentuk keragaman dan keunikan Kecamatan Merbau Mataram dengan sejarah, budaya, dan potensi yang kaya.
                        </p>
                    </div>
                </div>
            </section>

            {/* Villages Grid Section */}
            <section className="py-16 bg-white font-poppins">
                <div className="w-full px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {villages.map((village) => (
                            <Link key={village.id} to={`/profil-desa/${village.id}`}>
                                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer h-full flex flex-col">
                                    {/* Village Image */}
                                    <div className="relative overflow-hidden h-48 bg-gradient-to-br from-red-100 to-purple-100">
                                        <img
                                            src={village.images?.[0] || 'https://placehold.co/400x300/E0E7FF/4F46E5?text=Desa'}
                                            alt={village.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                    </div>

                                    {/* Village Info */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors">
                                            {village.name}
                                        </h3>
                                        <p className="text-sm text-red-700 font-semibold mb-3">
                                            Kecamatan Merbau Mataram
                                        </p>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                                            {village.history}
                                        </p>

                                        {/* Stats */}
                                        <div className="flex gap-4 mb-4 text-xs text-gray-500">
                                        </div>

                                        {/* Button */}
                                        <div className="inline-block">
                                            <span className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-lg font-semibold text-sm group-hover:bg-red-100 transition-colors">
                                                Lihat Profil
                                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <div className="w-full px-6 lg:px-12 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Ingin Mengenal Lebih Lanjut?</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        Klik pada kartu desa untuk melihat profil lengkap, struktur organisasi, dan informasi detail lainnya.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-red-700 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
                    >
                        Kembali ke Beranda
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Villages;
