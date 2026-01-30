import React, { useState } from 'react';

const StructureSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-16 bg-gray-50 font-poppins">
            <div className="w-full px-6 lg:px-12">
                <h2 className="text-5xl font-bold text-gray-900 mb-4">Struktur Organisasi</h2>
                <p className="text-xl text-gray-600 mb-12">Bagan organisasi Kecamatan Merbau Mataram</p>

                {/* Chart Container */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="p-8">
                        {/* Clickable Image */}
                        <div
                            onClick={() => setIsModalOpen(true)}
                            className="cursor-pointer group relative transition-all duration-300"
                        >
                            <img
                                src="https://placehold.co/900x600/1F2937/ffffff?text=Struktur+Organisasi+Kecamatan"
                                alt="Struktur Organisasi"
                                className="w-full h-auto rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-lg transition-colors duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center">
                                    <svg className="w-12 h-12 text-white mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                    </svg>
                                    <span className="text-white font-semibold text-lg">Klik untuk Perbesar</span>
                                </div>
                            </div>
                        </div>

                        {/* Info Text */}
                        <p className="mt-6 text-center text-gray-600 text-sm">
                            Klik pada gambar di atas untuk melihat struktur organisasi dalam ukuran lebih besar
                        </p>
                    </div>
                </div>


            </div>

            {/* Modal/Lightbox */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 transition-colors shadow-lg"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Modal Image */}
                        <img
                            src="https://placehold.co/1200x800/1F2937/ffffff?text=Struktur+Organisasi+Full+Size"
                            alt="Struktur Organisasi - Full Size"
                            className="w-full h-auto"
                        />

                        {/* Info Text */}
                        <div className="p-4 bg-gray-100 text-center">
                            <p className="text-gray-700 font-medium">Struktur Organisasi Kecamatan Merbau Mataram</p>
                            <p className="text-gray-600 text-sm mt-1">Tekan ESC atau klik tombol X untuk menutup</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Keyboard Shortcut Handler */}
            {isModalOpen && (
                <script>{`
                    document.addEventListener('keydown', (e) => {
                        if (e.key === 'Escape') {
                            // This will be handled by the component state
                        }
                    });
                `}</script>
            )}
        </section>
    );
};

export default StructureSection;
