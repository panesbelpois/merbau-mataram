import React, { useState, useEffect } from 'react';
import HomepagePic from '../assets/homepage-pic.jpeg';
import HomepagePic1 from '../assets/homepage-pic1.jpeg';
import HomepagePic2 from '../assets/homepage-pic2.jpeg';

const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [HomepagePic, HomepagePic1, HomepagePic2];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div 
            className="w-full relative h-[350px] overflow-hidden flex flex-col justify-center items-center text-center p-6 font-poppins transition-all duration-1000 ease-in-out"
            style={{
                backgroundImage: `url(${images[currentImageIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Maroon semi-transparent background overlay */}
            <div className="absolute inset-0 bg-red-900/30"></div>
            
            {/* Content */}
            <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-white" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>Kecamatan Merbau Mataram</h1>
                <p className="text-xl md:text-2xl font-light opacity-95 mb-2 text-white" style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.5)' }}>Kecamatan Merbau Mataram, Kabupaten Lampung Selatan</p>

                {/* Navigation Dots */}
                <div className="flex gap-2 justify-center mt-6">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`transition-all duration-300 rounded-full ${
                                index === currentImageIndex 
                                    ? 'w-3 h-3 bg-white scale-125' 
                                    : 'w-2.5 h-2.5 bg-white/60 hover:bg-white/80'
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
