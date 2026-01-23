import React from 'react';

const HeroSection = () => {
    return (
        <div className="w-full relative h-[500px] overflow-hidden bg-gray-900">
            <img
                src="https://placehold.co/1920x800/e2e8f0/475569?text=Foto+Desa+Merbau+Mataram"
                alt="Desa Merbau Mataram"
                className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-md">Desa Merbau Mataram</h1>
                <p className="text-xl md:text-2xl font-light opacity-90 mb-2 drop-shadow-sm">Kecamatan Merbau Mataram, Kabupaten Lampung Selatan</p>
                <div className="w-24 h-1 bg-yellow-400 rounded mt-4"></div>
                <p className="mt-4 italic font-medium">"Maju, Mandiri, dan Sejahtera"</p>
            </div>
        </div>
    );
};

export default HeroSection;
