import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import StructureSection from '../components/StructureSection';

const Home = () => {
    const missions = [
        {text: 'Mewujudkan masyarakat berakhlak mulia, bermoral, beretika, berbudaya, dan beradab berdasarkan falsafah Pancasila', icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h-2m0 0H10m2 0h2M4 12a8 8 0 018-8m0 0a8 8 0 018 8m0 0a8 8 0 01-8 8m0 0a8 8 0 01-8-8" />
            </svg>
        )},
        {text: 'Mewujudkan masyarakat demokratis berlandaskan hukum dengan aman dan damai', icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 1112 2.944a11.954 11.954 0 018.618 3.04A12.02 12.02 0 0121 12c0 6.627-5.373 12-12 12s-12-5.373-12-12c0-3.349 1.379-6.527 3.623-8.743" />
            </svg>
        )},
        {text: 'Mewujudkan tata kelola pemerintahan dengan prinsip-prinsip good goovernance', icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        )},
        {text: 'Memajukan dan memperkuat sumber daya manusia (SDM) secara berkelanjutan', icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-2a6 6 0 0112 0v2zm0 0h6v-2a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        )},
        {text: 'Mewujudkan pemerataan pembangunan dengan berkeadilan dan berkelanjutan', icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5a2.5 2.5 0 002.5-2.5V3.035A2 2 0 0020.04 1H3.96a2 2 0 00-2.905 2.935z" />
            </svg>
        )},
        {text: 'Mewujudkan Kabupaten Lampung Selatan sebagai wilayah pantai dan pegunungan yang maju', icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 015.646 5.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
        )},
        {text: 'Mewujudkan Kabupaten Lampung Selatan berperan aktif dalam pergaulan antar Daerah, Nasional dan Internasional.', icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5a2.5 2.5 0 002.5-2.5V3.035A2 2 0 0020.04 1H3.96a2 2 0 00-2.905 2.935z" />
            </svg>
        )}
    ];
    return (
        <div className="min-h-screen bg-white font-poppins">
            {/* 1. Hero Section */}
            <HeroSection />

            {/* 2. Sejarah Singkat Section */}
            <section className="py-16 bg-white">
                <div className="w-full px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text Content */}
                        <div>
                            <h2 className="text-5xl font-bold text-gray-900 mb-6">Tentang Kami</h2>
                            <p className="text-xl text-gray-700 leading-relaxed mb-4">
                                Kecamatan Merbau Mataram merupakan salah satu wilayah administratif di Kabupaten Lampung Selatan yang memiliki peran strategis sebagai daerah penyangga sekaligus penghubung antara kawasan industri Tanjung Bintang dengan pusat kota Bandar Lampung. Secara geografis, wilayah ini didominasi oleh bentang alam berupa dataran rendah dan perbukitan yang menjadikannya sangat potensial di sektor agraris. Struktur ekonominya bertumpu pada sektor perkebunan, terutama karet, kelapa sawit, dan kakao, serta sektor pertanian pangan seperti padi dan jagung yang dikelola oleh masyarakat setempat.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Kecamatan yang beribu kota di Desa Merbau Mataram ini dikenal memiliki keberagaman demografis yang tinggi. Penduduknya merupakan perpaduan antara masyarakat asli Lampung dan masyarakat transmigran dari Pulau Jawa serta Sunda, yang menciptakan tatanan sosial yang harmonis dan multikultural. Selain sektor pertanian, posisi wilayah ini yang berdekatan dengan jalur logistik utama di Lampung Selatan memicu pertumbuhan pada sektor jasa dan perdagangan kecil hingga menengah.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Dalam perkembangannya, Merbau Mataram kini terus mengalami peningkatan infrastruktur untuk mendukung aksesibilitas antar-desa dan distribusi hasil bumi. Wilayah ini terdiri dari 15 desa yang secara kolektif berkontribusi pada ketahanan pangan daerah, sembari perlahan mulai mengembangkan potensi wisata lokal berbasis alam dan pemberdayaan masyarakat pedesaan.
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
            <section className="py-16 bg-white">
                <div className="w-full px-6 lg:px-12">
                    {/* Visi */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-gray-900 mb-6">Visi Kami</h2>
                        <div className="inline-block">
                            <p className="text-4xl font-bold text-red-900 leading-relaxed max-w-4xl">
                                "Mewujudkan Lampung Selatan Maju Menuju Indonesia Emas 2045."
                            </p>
                        </div>
                    </div>

                    {/* Misi - Cards Grid (diperbarui dari input pengguna) */}
                    <div>
                        <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">Misi Kami</h3>
                        <div className="flex flex-wrap justify-center gap-8">
                            {missions.map((m, idx) => (
                                <div key={idx} className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group ${idx === 6 ? 'md:col-span-1 flex-basis-1/3 md:flex-basis-1/3 lg:w-1/3 max-w-sm' : 'w-full sm:w-96'}`}>
                                    <div className="h-24 bg-red-900 text-white flex items-center justify-center">
                                        {m.icon}
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-600">{m.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Struktur Organisasi Section */}
            <StructureSection />

            {/* 5. Peta Wilayah Section */}
            <section className="py-16 bg-white">
                <div className="w-full px-6 lg:px-12">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">Peta Wilayah</h2>
                    <p className="text-xl text-gray-600 mb-12">Visualisasi geografis Kecamatan Merbau Mataram</p>

                    {/* Google Maps Embed */}
                    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.779620503476!2d105.32458632346997!3d-5.429168494124898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40a1a1a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sMerbau%20Mataram%2C%20South%20Lampung%20Regency%2C%20Lampung!5e0!3m2!1sen!2sid!4v1706594400000"
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full rounded-xl"
                        ></iframe>
                    </div>

                    {/* Map Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-12 justify-items-center">
                        <div className="bg-red-50 rounded-lg p-6 text-center hover:bg-red-100 transition-colors w-full max-w-xs">
                            <div className="text-3xl font-bold text-red-700 mb-2">15</div>
                            <p className="text-gray-700 font-medium">Desa</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-6 text-center hover:bg-green-100 transition-colors w-full max-w-xs">
                            <div className="text-3xl font-bold text-green-600 mb-2">~158 km²</div>
                            <p className="text-gray-700 font-medium">Luas Wilayah</p>
                        </div>
                        <div className="bg-red-50 rounded-lg p-6 text-center hover:bg-red-100 transition-colors w-full max-w-xs">
                            <div className="text-3xl font-bold text-red-600 mb-2">~58.000</div>
                            <p className="text-gray-700 font-medium">Jumlah Penduduk</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
