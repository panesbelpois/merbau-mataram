import React from 'react';

const VillageCarousel = () => {
    // Dummy data for 15 villages
    const villages = [
        {
            id: 1,
            name: "Kampung Merbau",
            description: "Kampung tradisional dengan pengrajin batik lokal yang terkenal.",
            image: "https://placehold.co/300x200/4F46E5/ffffff?text=Kampung+Merbau"
        },
        {
            id: 2,
            name: "Desa Mataram",
            description: "Pusat administrative dengan fasilitas umum lengkap.",
            image: "https://placehold.co/300x200/7C3AED/ffffff?text=Desa+Mataram"
        },
        {
            id: 3,
            name: "Kampung Sungai",
            description: "Desa tepi sungai dengan potensi pertanian organik.",
            image: "https://placehold.co/300x200/06B6D4/ffffff?text=Kampung+Sungai"
        },
        {
            id: 4,
            name: "Desa Bukit Hijau",
            description: "Desa pegunungan dengan pemandangan alam yang indah.",
            image: "https://placehold.co/300x200/10B981/ffffff?text=Desa+Bukit+Hijau"
        },
        {
            id: 5,
            name: "Kampung Permai",
            description: "Pemukiman baru dengan infrastruktur modern.",
            image: "https://placehold.co/300x200/F59E0B/ffffff?text=Kampung+Permai"
        },
        {
            id: 6,
            name: "Desa Makmur",
            description: "Komunitas perdagangan yang berkembang pesat.",
            image: "https://placehold.co/300x200/EF4444/ffffff?text=Desa+Makmur"
        },
        {
            id: 7,
            name: "Kampung Aman",
            description: "Kampung dengan tingkat keamanan dan kenyamanan tinggi.",
            image: "https://placehold.co/300x200/8B5CF6/ffffff?text=Kampung+Aman"
        },
        {
            id: 8,
            name: "Desa Bersih",
            description: "Desa pilot untuk program kebersihan lingkungan.",
            image: "https://placehold.co/300x200/EC4899/ffffff?text=Desa+Bersih"
        },
        {
            id: 9,
            name: "Kampung Ceria",
            description: "Desa dengan program pendidikan komunitas aktif.",
            image: "https://placehold.co/300x200/14B8A6/ffffff?text=Kampung+Ceria"
        },
        {
            id: 10,
            name: "Desa Sejahtera",
            description: "Desa dengan tingkat kesejahteraan masyarakat tinggi.",
            image: "https://placehold.co/300x200/F97316/ffffff?text=Desa+Sejahtera"
        },
        {
            id: 11,
            name: "Kampung Damai",
            description: "Komunitas harmonis dengan solidaritas kuat.",
            image: "https://placehold.co/300x200/06B6D4/ffffff?text=Kampung+Damai"
        },
        {
            id: 12,
            name: "Desa Sentosa",
            description: "Desa wisata dengan atraksi budaya lokal.",
            image: "https://placehold.co/300x200/10B981/ffffff?text=Desa+Sentosa"
        },
        {
            id: 13,
            name: "Kampung Indah",
            description: "Kawasan berarsitektur unik dan penuh warna.",
            image: "https://placehold.co/300x200/F59E0B/ffffff?text=Kampung+Indah"
        },
        {
            id: 14,
            name: "Desa Jaya",
            description: "Desa dengan kemajuan ekonomi dan infrastruktur baik.",
            image: "https://placehold.co/300x200/EF4444/ffffff?text=Desa+Jaya"
        },
        {
            id: 15,
            name: "Kampung Pintar",
            description: "Komunitas dengan fokus pada pendidikan dan inovasi.",
            image: "https://placehold.co/300x200/8B5CF6/ffffff?text=Kampung+Pintar"
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Desa & Kampung</h2>
                <p className="text-lg text-gray-600 mb-12">Jelajahi 15 desa dan kampung di Kecamatan Merbau Mataram</p>
                
                {/* Scrollable Container */}
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex gap-6 pb-4">
                        {villages.map((village) => (
                            <div
                                key={village.id}
                                className="flex-shrink-0 w-80 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group cursor-pointer"
                            >
                                {/* Image Container */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={village.image}
                                        alt={village.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                        {village.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {village.description}
                                    </p>
                                    <button className="mt-4 inline-flex items-center text-indigo-600 font-semibold text-sm hover:text-indigo-700 transition-colors">
                                        Pelajari Lebih Lanjut
                                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="mt-6 flex items-center justify-center text-gray-500 text-sm">
                    <svg className="w-5 h-5 mr-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7m0 0l-7 7m7-7H6" />
                    </svg>
                    Geser ke kanan untuk melihat lebih banyak
                </div>
            </div>
        </section>
    );
};

export default VillageCarousel;
