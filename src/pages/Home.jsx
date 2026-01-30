import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import StructureSection from '../components/StructureSection';
import ImageCarousel from '../components/ImageCarousel';

const Home = () => {
    const missions = [
        {
            text: 'Mewujudkan masyarakat berakhlak mulia, bermoral, beretika, berbudaya, dan beradab berdasarkan falsafah Pancasila', icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h-2m0 0H10m2 0h2M4 12a8 8 0 018-8m0 0a8 8 0 018 8m0 0a8 8 0 01-8 8m0 0a8 8 0 01-8-8" />
                </svg>
            )
        },
        {
            text: 'Mewujudkan masyarakat demokratis berlandaskan hukum dengan aman dan damai', icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 1112 2.944a11.954 11.954 0 018.618 3.04A12.02 12.02 0 0121 12c0 6.627-5.373 12-12 12s-12-5.373-12-12c0-3.349 1.379-6.527 3.623-8.743" />
                </svg>
            )
        },
        {
            text: 'Mewujudkan tata kelola pemerintahan dengan prinsip-prinsip good goovernance', icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            text: 'Memajukan dan memperkuat sumber daya manusia (SDM) secara berkelanjutan', icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-2a6 6 0 0112 0v2zm0 0h6v-2a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            text: 'Mewujudkan pemerataan pembangunan dengan berkeadilan dan berkelanjutan', icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5a2.5 2.5 0 002.5-2.5V3.035A2 2 0 0020.04 1H3.96a2 2 0 00-2.905 2.935z" />
                </svg>
            )
        },
        {
            text: 'Mewujudkan Kabupaten Lampung Selatan sebagai wilayah pantai dan pegunungan yang maju', icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 015.646 5.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            )
        },
        {
            text: 'Mewujudkan Kabupaten Lampung Selatan berperan aktif dalam pergaulan antar Daerah, Nasional dan Internasional.', icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5a2.5 2.5 0 002.5-2.5V3.035A2 2 0 0020.04 1H3.96a2 2 0 00-2.905 2.935z" />
                </svg>
            )
        }
    ];
    return (
        <div className="min-h-screen bg-white font-poppins">
            {/* 1. Hero Section */}
            <HeroSection />

            {/* 2. Sejarah Singkat Section */}
            <section className="py-16 bg-white">
                <div className="w-full px-6 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Text Content */}
                        <div>
                            <h2 className="text-5xl font-bold text-gray-900 mb-6">Tentang Kami</h2>
                            <p className="text-xl text-gray-700 leading-relaxed mb-4 text-justify">
                                Kecamatan Merbau Mataram merupakan salah satu wilayah administratif di Kabupaten Lampung Selatan yang memiliki peran strategis sebagai daerah penyangga sekaligus penghubung antara kawasan industri Tanjung Bintang dengan pusat kota Bandar Lampung. Secara geografis, wilayah ini didominasi oleh bentang alam berupa dataran rendah dan perbukitan yang menjadikannya sangat potensial di sektor agraris. Struktur ekonominya bertumpu pada sektor perkebunan, terutama karet, kelapa sawit, dan kakao, serta sektor pertanian pangan seperti padi dan jagung yang dikelola oleh masyarakat setempat.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
                                Kecamatan yang beribu kota di Desa Merbau Mataram ini dikenal memiliki keberagaman demografis yang tinggi. Penduduknya merupakan perpaduan antara masyarakat asli Lampung dan masyarakat transmigran dari Pulau Jawa serta Sunda, yang menciptakan tatanan sosial yang harmonis dan multikultural. Selain sektor pertanian, posisi wilayah ini yang berdekatan dengan jalur logistik utama di Lampung Selatan memicu pertumbuhan pada sektor jasa dan perdagangan kecil hingga menengah.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed text-justify">
                                Dalam perkembangannya, Merbau Mataram kini terus mengalami peningkatan infrastruktur untuk mendukung aksesibilitas antar-desa dan distribusi hasil bumi. Wilayah ini terdiri dari 15 desa yang secara kolektif berkontribusi pada ketahanan pangan daerah, sembari perlahan mulai mengembangkan potensi wisata lokal berbasis alam dan pemberdayaan masyarakat pedesaan.
                            </p>
                        </div>

                        {/* Right: Image Carousel */}
                        <div className="flex flex-col items-center gap-6">
                            <ImageCarousel />
                            
                            {/* Instagram Link */}
                            <a
                                href="https://www.instagram.com/merbaumataram_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.011 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.059 1.266.07 1.646.07 4.85s-.011 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.059-1.646.07-4.85.07s-3.584-.011-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.059-1.266-.07-1.646-.07-4.85s.011-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.059 1.646-.07 4.85-.07zm0-2.163C8.741 0 8.328.011 7.052.07 5.776.13 4.5.4 3.417 1.483 2.334 2.566 2.063 3.842 2.003 5.118.944 6.394.933 6.807.933 12c0 5.193.011 5.606.07 6.882.06 1.276.331 2.552 1.414 3.635 1.083 1.083 2.359 1.354 3.635 1.414 1.276.059 1.689.07 6.882.07 5.193 0 5.606-.011 6.882-.07 1.276-.06 2.552-.331 3.635-1.414 1.083-1.083 1.354-2.359 1.414-3.635.059-1.276.07-1.689.07-6.882 0-5.193-.011-5.606-.07-6.882-.06-1.276-.331-2.552-1.414-3.635-1.083-1.083-2.359-1.354-3.635-1.414C15.606.011 15.193 0 12 0z"/>
                                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z"/>
                                    <circle cx="18.406" cy="5.594" r="1.44"/>
                                </svg>
                                Ikuti Instagram Kami Untuk Kegiatan Lainnya!
                            </a>
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
                <div className="w-full px-6 lg:px-24">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">Peta Wilayah</h2>
                    <p className="text-xl text-gray-600 mb-12">Visualisasi geografis Kecamatan Merbau Mataram</p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column: Google Maps Embed */}
                        <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-[500px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.779620503476!2d105.32458632346997!3d-5.429168494124898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40a1a1a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sMerbau%20Mataram%2C%20South%20Lampung%20Regency%2C%20Lampung!5e0!3m2!1sen!2sid!4v1706594400000"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full object-cover"
                            ></iframe>
                        </div>

                    {/* Right Column: Map Info Cards (Stacked Vertically) */}
                    <div className="lg:col-span-1 flex flex-col justify-between gap-6 h-[500px]">
                        <div className="bg-white rounded-lg p-8 text-center hover:bg-gray-50 transition-colors w-full border border-gray-200 flex-1 flex flex-col justify-center items-center shadow-sm">
                            <div className="text-5xl font-bold text-red-700 mb-4">15</div>
                            <p className="text-xl text-gray-700 font-medium">Desa</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-8 text-center hover:bg-green-100 transition-colors w-full flex-1 flex flex-col justify-center items-center shadow-sm">
                            <div className="text-4xl font-bold text-green-600 mb-4">~158 km²</div>
                            <p className="text-xl text-gray-700 font-medium">Luas Wilayah</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-8 text-center hover:bg-purple-100 transition-colors w-full flex-1 flex flex-col justify-center items-center shadow-sm">
                            <div className="text-4xl font-bold text-red-600 mb-4">~58.000</div>
                            <p className="text-xl text-gray-700 font-medium">Jumlah Penduduk</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
