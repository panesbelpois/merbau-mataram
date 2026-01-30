import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../assets/carousel/1.jpeg';
import img2 from '../assets/carousel/2.jpeg';
import img3 from '../assets/carousel/3.jpg';
import img4 from '../assets/carousel/4.jpeg';

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        { src: img1, alt: 'Merbau Mataram 1' },
        { src: img2, alt: 'Merbau Mataram 2' },
        { src: img3, alt: 'Merbau Mataram 3' },
        { src: img4, alt: 'Merbau Mataram 4' },
    ];

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full max-w-3xl mx-auto">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl h-96 lg:h-[500px]">
                <div className="relative w-full h-full">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
                                index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Left Navigation Button */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-3 transition-all duration-200 z-10 shadow-lg"
                    aria-label="Previous image"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Right Navigation Button */}
                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-3 transition-all duration-200 z-10 shadow-lg"
                    aria-label="Next image"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Indicator Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentIndex
                                    ? 'bg-white scale-125'
                                    : 'bg-white/50 hover:bg-white/75'
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
