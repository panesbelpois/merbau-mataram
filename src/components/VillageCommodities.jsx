import React from 'react';

const VillageCommodities = () => {
    return (
        <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">

                {/* Komoditi Unggulan (Lebar) */}
                <section className="md:col-span-8 bg-gray-50 rounded-xl shadow-sm p-8 border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Komoditi Unggulan</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { name: "Padi", desc: "Hasil panen melimpah dengan kualitas unggul.", icon: "🌾" },
                            { name: "Jagung", desc: "Pakan ternak dan konsumsi, komoditas utama kedua.", icon: "🌽" },
                            { name: "Singkong", desc: "Bahan baku industri olahan pangan.", icon: "🍠" },
                            { name: "Kelapa Sawit", desc: "Perkebunan rakyat yang produktif.", icon: "🌴" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-default">
                                <div className="text-4xl mr-4">{item.icon}</div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Mata Pencaharian (Side) */}
                <section className="md:col-span-4 bg-gray-50 rounded-xl shadow-sm p-8 border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Mata Pencaharian</h2>
                    <ul className="space-y-3">
                        {[
                            { job: "Petani", pct: "60%" },
                            { job: "Buruh Tani", pct: "20%" },
                            { job: "Pedagang", pct: "10%" },
                            { job: "PNS / Karyawan", pct: "5%" },
                            { job: "Lainnya", pct: "5%" }
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                                <span className="font-medium text-gray-700">{item.job}</span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded-full">{item.pct}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default VillageCommodities;
