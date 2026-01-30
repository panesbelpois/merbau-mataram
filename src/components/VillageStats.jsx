import React from 'react';

const VillageStats = () => {
    return (
        <div className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-poppins">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Geografis */}
                <section className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 h-full">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <svg className="w-6 h-6 mr-2 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Informasi Geografis
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="py-3 px-4 text-sm font-medium text-gray-500 bg-gray-50 rounded-l-lg">Luas Wilayah</td>
                                    <td className="py-3 px-4 text-sm text-gray-900 rounded-r-lg font-semibold">± 1.500 Hektar</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 text-sm font-medium text-gray-500 bg-gray-50 rounded-l-lg">Ketinggian</td>
                                    <td className="py-3 px-4 text-sm text-gray-900 rounded-r-lg font-semibold">100 mdpl</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 text-sm font-medium text-gray-500 bg-gray-50 rounded-l-lg">Topografi</td>
                                    <td className="py-3 px-4 text-sm text-gray-900 rounded-r-lg font-semibold">Dataran Rendah & Perbukitan</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 text-sm font-medium text-gray-500 bg-gray-50 rounded-l-lg">Jumlah Dusun</td>
                                    <td className="py-3 px-4 text-sm text-gray-900 rounded-r-lg font-semibold">8 Dusun</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Batas Wilayah */}
                <section className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 h-full">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <svg className="w-6 h-6 mr-2 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        Batas Wilayah
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-1">Utara</span>
                            <div className="text-gray-800 font-semibold">Desa Tanjung Baru</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-1">Selatan</span>
                            <div className="text-gray-800 font-semibold">Desa Baru Ranji</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-1">Timur</span>
                            <div className="text-gray-800 font-semibold">Desa Karang Jaya</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-1">Barat</span>
                            <div className="text-gray-800 font-semibold">Desa Triharjo</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default VillageStats;
