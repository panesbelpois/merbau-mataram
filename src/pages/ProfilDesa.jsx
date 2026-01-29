import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { villages } from '../data/villages';

const ProfilDesa = () => {
    const { id } = useParams();
    const [village, setVillage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Find village by ID (ensure type matching)
        const foundVillage = villages.find(v => v.id === parseInt(id));
        setVillage(foundVillage);
        setCurrentImageIndex(0); // Reset slider on village change
    }, [id]);

    useEffect(() => {
        if (village && village.images && village.images.length > 1) {
            const timer = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % village.images.length);
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [village]);

    if (!village) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800">Desa tidak ditemukan</h2>
                    <Link to="/" className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block">
                        Kembali ke Beranda
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* HERO / SLIDESHOW SECTION */}
            <div className="relative h-[60vh] w-full overflow-hidden bg-gray-900">
                {village.images && village.images.length > 0 ? (
                    village.images.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <img
                                src={img}
                                alt={`${village.name} - ${index + 1}`}
                                className="w-full h-full object-cover opacity-60"
                            />
                        </div>
                    ))
                ) : (
                    // Fallback if no images
                    <div className="absolute inset-0 bg-gray-800" />
                )}

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
                        {village.name}
                    </h1>
                    <p className="text-xl md:text-2xl font-light opacity-90 mb-6 drop-shadow-md">
                        {village.kecamatan}, Kabupaten Lampung Selatan
                    </p>

                    {/* Slide Indicators */}
                    {village.images && village.images.length > 1 && (
                        <div className="flex gap-2 mt-4">
                            {village.images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImageIndex(idx)}
                                    className={`w-3 h-3 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                                        }`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* MAIN CONTENT - Clean Layout (No Cards) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* LEFT COLUMN (2/3): History, Map, Contact */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Sejarah Section */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                                Sejarah & Profil Desa
                            </h2>
                            <div className="prose prose-lg prose-indigo max-w-none text-gray-700 leading-relaxed text-justify">
                                <p>{village.history || village.description}</p>
                            </div>
                        </section>

                        {/* Peta & Contact Section (Grouped) */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                                Lokasi & Kontak
                            </h2>

                            {/* Map */}
                            <div className="w-full h-[450px] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
                                {village.mapUrl ? (
                                    <iframe
                                        src={village.mapUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={`Peta ${village.name}`}
                                    ></iframe>
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                                        <p>Peta belum tersedia</p>
                                    </div>
                                )}
                            </div>

                            {/* Contact Info (Directly below Map) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wide">Alamat Kantor</h3>
                                    <p className="text-gray-600 mb-4">{village.address || "Alamat belum tersedia."}</p>

                                    {village.gmapsLink && (
                                        <a
                                            href={village.gmapsLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            Buka di Google Maps
                                        </a>
                                    )}
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* RIGHT COLUMN (1/3): Org Structure */}
                    <div className="lg:col-span-1">
                        <section className="sticky top-24">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                                Batas Wilayah
                            </h2>
                            {village.boundaries ? (
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">U</div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Utara</p>
                                            <p className="font-semibold text-gray-900">{village.boundaries.north}</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">T</div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Timur</p>
                                            <p className="font-semibold text-gray-900">{village.boundaries.east}</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">S</div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Selatan</p>
                                            <p className="font-semibold text-gray-900">{village.boundaries.south}</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center font-bold">B</div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Barat</p>
                                            <p className="font-semibold text-gray-900">{village.boundaries.west}</p>
                                        </div>
                                    </li>
                                </ul>
                            ) : (
                                <p className="text-gray-500 italic">Data batas wilayah belum tersedia.</p>
                            )}
                        </section>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfilDesa;
