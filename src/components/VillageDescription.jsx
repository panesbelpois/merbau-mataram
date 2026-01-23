import React from 'react';

const VillageDescription = () => {
    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 w-full border-b border-gray-100">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-600 pl-4">Tentang Desa</h2>
                <div className="prose max-w-none text-lg leading-relaxed text-gray-600">
                    <p className="mb-4">
                        Desa Merbau Mataram adalah salah satu desa yang terletak di Kecamatan Merbau Mataram, Kabupaten Lampung Selatan.
                        Desa ini dikenal dengan suasana yang asri, masyarakat yang guyub rukun, dan potensi alam yang melimpah.
                    </p>
                    <p>
                        Secara geografis, desa ini memiliki karakteristik wilayah dataran rendah yang subur, menjadikannya sangat potensial
                        untuk pengembangan sektor pertanian dan perkebunan. Kehidupan masyarakat sangat kental dengan nilai-nilai gotong royong
                        dan kearifan lokal yang masih terjaga hingga saat ini.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default VillageDescription;
