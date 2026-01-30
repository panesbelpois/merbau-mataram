import React from 'react';

const HeroSection = () => {
    return (
        <div className="w-full relative h-[350px] overflow-hidden bg-white flex flex-col justify-center items-center text-center text-gray-900 p-6 font-poppins">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>Kecamatan Merbau Mataram</h1>
            <p className="text-xl md:text-2xl font-light opacity-90 mb-2" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }}>Kecamatan Merbau Mataram, Kabupaten Lampung Selatan</p>
            </div>
    );
};

export default HeroSection;
