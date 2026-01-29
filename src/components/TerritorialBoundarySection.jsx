import React from 'react';

const TerritorialBoundarySection = () => {
    const boundaries = [
        { direction: "Utara", location: "Kecamatan Tanjung Bintang", icon: "M5 10l7-7m0 0l7 7m-7-7v18" },
        { direction: "Timur", location: "Kecamatan Katibung", icon: "M14 5l7 7m0 0l-7 7m7-7H3" },
        { direction: "Selatan", location: "Selat Sunda", icon: "M19 14l-7 7m0 0l-7-7m7 7V3" },
        { direction: "Barat", location: "Kecamatan Jati Agung", icon: "M10 19l-7-7m0 0l7-7m-7 7h18" }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Batas Wilayah</h2>
                    <p className="text-lg text-gray-600">Batas-batas wilayah administrasi Kecamatan Merbau Mataram</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {boundaries.map((item, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.direction}</h3>
                                <div className="w-12 h-1 bg-sky-500 rounded-full mb-3"></div>
                                <p className="text-gray-600 font-medium group-hover:text-sky-700 transition-colors">
                                    {item.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info Tambahan */}
                <div className="mt-12 bg-sky-50 rounded-2xl p-8 border border-sky-100">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-sky-500 p-3 rounded-full">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">Luas Wilayah</h4>
                                <p className="text-gray-600">Total luas wilayah Kecamatan Merbau Mataram mencapai ± 25.000 Ha</p>
                            </div>
                        </div>
                        <div className="hidden md:block w-px h-16 bg-sky-200"></div>
                        <div className="flex items-center gap-4">
                            <div className="bg-indigo-500 p-3 rounded-full">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">Administratif</h4>
                                <p className="text-gray-600">Terdiri dari 15 Desa dan Kampung Definitif</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TerritorialBoundarySection;
