import React from 'react';
import HeroSection from '../components/HeroSection';
import VillageCarousel from '../components/VillageCarousel';
import StructureSection from '../components/StructureSection';

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* 1. Hero Section */}
            <HeroSection />

            {/* 2. Sejarah Singkat Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text Content */}
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Sejarah Singkat</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Kecamatan Merbau Mataram memiliki sejarah panjang sebagai pusat pemerintahan lokal yang berkontribusi signifikan dalam pembangunan Kabupaten Lampung Selatan. Terbentuk melalui proses administratif yang matang, kecamatan ini telah berkembang menjadi daerah strategis dengan potensi ekonomi dan sosial yang kuat.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Dengan wilayah yang luas dan penduduk yang tersebar di berbagai desa dan kampung, Kecamatan Merbau Mataram terus berinovasi dalam melayani masyarakat. Program-program pembangunan berkelanjutan telah diterapkan untuk meningkatkan kualitas hidup penduduk, dari infrastruktur hingga pendidikan dan kesehatan.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Komitmen kami adalah mewujudkan visi menjadi kecamatan yang maju, mandiri, dan sejahtera bagi seluruh masyarakat yang tinggal di dalamnya.
                            </p>
                        </div>

                        {/* Right: Image Illustration */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <img
                                    src="https://placehold.co/500x400/E0E7FF/4F46E5?text=Sejarah+Merbau+Mataram"
                                    alt="Sejarah Kecamatan"
                                    className="rounded-2xl shadow-2xl"
                                />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 rounded-full opacity-20 blur-3xl"></div>
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Visi & Misi Section */}
            <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Visi */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Visi Kami</h2>
                        <div className="inline-block">
                            <p className="text-2xl font-bold text-indigo-600 leading-relaxed max-w-3xl">
                                "Mewujudkan Kecamatan Merbau Mataram yang Maju, Mandiri, dan Sejahtera dengan Tata Kelola Pemerintahan yang Baik, Pembangunan Berkelanjutan, dan Masyarakat yang Berkualitas"
                            </p>
                        </div>
                    </div>

                    {/* Misi - Cards Grid */}
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Misi Kami</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Misi Card 1 */}
                            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                                <div className="h-24 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-xl font-bold text-gray-900 mb-3">Pembangunan Infrastruktur</h4>
                                    <p className="text-gray-600">Meningkatkan dan memelihara infrastruktur dasar untuk mendukung pertumbuhan ekonomi dan peningkatan kualitas hidup masyarakat.</p>
                                </div>
                            </div>

                            {/* Misi Card 2 */}
                            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                                <div className="h-24 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                    </svg>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-xl font-bold text-gray-900 mb-3">Pemberdayaan Masyarakat</h4>
                                    <p className="text-gray-600">Memberdayakan masyarakat melalui pelatihan, pendidikan, dan akses terhadap sumber daya ekonomi untuk meningkatkan daya saing.</p>
                                </div>
                            </div>

                            {/* Misi Card 3 */}
                            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                                <div className="h-24 bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-xl font-bold text-gray-900 mb-3">Kesejahteraan Sosial</h4>
                                    <p className="text-gray-600">Menjamin kesejahteraan sosial masyarakat melalui program bantuan sosial, kesehatan, dan pelayanan publik yang berkualitas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Struktur Organisasi Section */}
            <StructureSection />

            {/* 5. Village Carousel Section */}
            <VillageCarousel />

            {/* 6. Peta Wilayah Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Peta Wilayah</h2>
                    <p className="text-lg text-gray-600 mb-12">Visualisasi geografis Kecamatan Merbau Mataram</p>

                    {/* Map Placeholder */}
                    <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <img
                            src="https://placehold.co/1000x500/9CA3AF/475569?text=Peta+Wilayah+Kecamatan+Merbau+Mataram"
                            alt="Peta Wilayah"
                            className="w-full h-auto"
                        />
                        <div className="p-6 bg-white text-center">
                            <p className="text-gray-700 font-medium">Peta mendetail Kecamatan Merbau Mataram akan segera ditampilkan</p>
                            <p className="text-gray-600 text-sm mt-2">Fitur interaktif sedang dalam pengembangan</p>
                        </div>
                    </div>

                    {/* Map Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        <div className="bg-blue-50 rounded-lg p-6 text-center hover:bg-blue-100 transition-colors">
                            <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
                            <p className="text-gray-700 font-medium">Desa & Kampung</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-6 text-center hover:bg-green-100 transition-colors">
                            <div className="text-3xl font-bold text-green-600 mb-2">~25km²</div>
                            <p className="text-gray-700 font-medium">Luas Wilayah</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-6 text-center hover:bg-purple-100 transition-colors">
                            <div className="text-3xl font-bold text-purple-600 mb-2">~45K</div>
                            <p className="text-gray-700 font-medium">Jumlah Penduduk</p>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-6 text-center hover:bg-orange-100 transition-colors">
                            <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
                            <p className="text-gray-700 font-medium">Bidang Operasional</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ingin Tahu Lebih Banyak?</h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Jelajahi profil lengkap, statistik, dan program-program pembangunan Kecamatan Merbau Mataram
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-indigo-50 transition-colors shadow-lg">
                            Lihat Profil Lengkap
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
                            Hubungi Kami
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
