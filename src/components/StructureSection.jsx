import React from 'react';

const StructureSection = () => {
    // Data Structure extracted from image
    const camat = {
        jabatan: "Camat",
        nama: "Ricky Randa Belpama, S.I.Kom, M.M",
        nip: "19910804 201503 1 002"
    };

    const sekcam = {
        jabatan: "Sekcam",
        nama: "Alpian, S.Sos",
        nip: "19790802 200501 1 010"
    };

    const kasubag = [
        {
            jabatan: "Plt. Kasubag Umum & Kepegawaian",
            nama: "Sumbono",
            nip: "19680726 200701 1 021",
            staf: ["Sri Lestari (THLS)", "Firdaus, ST (THLS)"]
        },
        {
            jabatan: "Plt. Kasubag Perencanaan & Keuangan",
            nama: "-", // Vacant in image or not clearly visible, assuming vacant based on plan
            nip: "-",
            staf: ["Rudy Satrimanto Ginting, S.E, M.M (THLS)", "Anton Iskandar (THLS)"]
        }
    ];

    const kasi = [
        {
            jabatan: "Kasi Pemerintahan",
            nama: "Nurasa Agustina, SS",
            nip: "19751216 200901 2 002",
            staf: ["Heri Nurcandra, S.E (THLS)", "Aria Saputra (THLS)"]
        },
        {
            jabatan: "Kasi Trantibum",
            nama: "R.Sy. Handoyo Soesilo, S.IP, M.M",
            nip: "19810309 200901 1 005",
            staf: ["Mayrina Ekasari, S.E (THLS)", "Ambar Maulana (THLS)", "M. Muhammad Ikrar Ali Gunta (THLS)", "Ahmat Saleh (THLS)"]
        },
        {
            jabatan: "Kasi Ekobang",
            nama: "Solihat Saprianti, S.E",
            nip: "19810408 200801 2 013",
            staf: ["Win Lestari, S.E (THLS)"]
        },
        {
            jabatan: "Kasi Kesmas, Ketnaker & Infokom",
            nama: "Whisnu Satya Negara, S.I.Kom",
            nip: "19831120 200801 1 007",
            staf: ["Candra Endaro Dessuara, S.H (THLS)", "Jana Suryana, A.Md (THLS)"]
        },
        {
            jabatan: "Kasi Pertanahan & Tata Ruang",
            nama: "Tri Astuti, S.E",
            nip: "19801106 201001 2 005",
            staf: ["Des Arfian Suprayoga, S.Kom (THLS)"]
        }
    ];

    // Card Component
    const OrgCard = ({ data, colorClass = "bg-white", headerColor = "bg-gray-100", widthClass = "w-64" }) => (
        <div className={`flex flex-col items-center ${widthClass} z-10`}>
            {/* Box */}
            <div className={`w-full rounded-lg shadow-md border border-gray-200 overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300`}>
                <div className={`${headerColor} p-2 border-b border-gray-200`}>
                    <h3 className="text-sm font-bold text-center text-gray-800 uppercase leading-tight">{data.jabatan}</h3>
                </div>
                <div className="p-4 text-center">
                    <p className="font-semibold text-gray-900 text-sm">{data.nama}</p>
                    {data.nip && data.nip !== "-" && (
                        <p className="text-xs text-gray-500 mt-1">NIP. {data.nip}</p>
                    )}
                </div>
                {/* Staf Section if exists */}
                {data.staf && data.staf.length > 0 && (
                    <div className="bg-gray-50 p-3 text-left border-t border-gray-100">
                        <p className="text-xs font-semibold text-gray-500 mb-1">Staf:</p>
                        <ul className="list-disc list-inside">
                            {data.staf.map((s, idx) => (
                                <li key={idx} className="text-xs text-gray-600 truncate" title={s}>{s}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );

    // Connector Line Component
    const VerticalLine = ({ height = "h-8" }) => (
        <div className={`w-px bg-gray-400 ${height}`}></div>
    );

    const HorizontalLine = ({ width = "w-full" }) => (
        <div className={`h-px bg-gray-400 ${width}`}></div>
    );

    return (
        <section className="py-16 bg-gray-50 font-poppins">
            <div className="w-full px-4 lg:px-12 overflow-x-auto">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">Struktur Organisasi</h2>
                    <p className="text-xl text-gray-600">Pemerintah Kecamatan Merbau Mataram</p>
                </div>

                <div className="min-w-[1024px] flex flex-col items-center pb-12">
                    {/* Level 1: Camat */}
                    <OrgCard data={camat} headerColor="bg-red-100" widthClass="w-72" />
                    <VerticalLine />

                    {/* Level 2: Sekcam */}
                    <OrgCard data={sekcam} headerColor="bg-orange-100" widthClass="w-72" />
                    <VerticalLine height="h-8" />

                    {/* Kasubag Container */}
                    <div className="relative flex justify-center gap-16 mb-12">
                        {/* Horizontal line for Kasubags (Width = Distance between centers = 320px) */}
                        <div className="absolute top-0 w-[320px] h-px bg-gray-400"></div>
                        {/* Vertical Connectors for Kasubags (Offset = 160px from center) */}
                        <div className="absolute top-0 left-[calc(50%-160px)] w-px h-8 bg-gray-400"></div>
                        <div className="absolute top-0 right-[calc(50%-160px)] w-px h-8 bg-gray-400"></div>

                        {/* Kasubag Cards */}
                        <div className="mt-8">
                            <OrgCard data={kasubag[0]} headerColor="bg-blue-100" />
                        </div>
                        <div className="mt-8">
                            <OrgCard data={kasubag[1]} headerColor="bg-blue-100" />
                        </div>
                    </div>

                    {/* Connector to Kasi Line */}
                    {/* Line from center (Sekcam axis) down to Kasi line */}
                    <div className="-mt-12 h-20 w-px bg-gray-400 z-0"></div>

                    {/* Kasi Container */}
                    <div className="relative w-full flex justify-center gap-6">
                        {/* Master Horizontal Line for Kasis (Width = Distance between outer centers = 4 * 248px = 992px) */}
                        {/* Pitch = Card(224) + Gap(24) = 248px. 5 items. Distance from -2 to +2 is 4 spans. 4 * 248 = 992. */}
                        <div className="absolute top-0 w-[992px] h-px bg-gray-400"></div>

                        {kasi.map((k, index) => (
                            <div key={index} className="flex flex-col items-center relative pt-0">
                                {/* Vertical connector for each Kasi */}
                                <div className="w-px h-8 bg-gray-400"></div>
                                <OrgCard data={k} headerColor="bg-green-100" widthClass="w-56" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StructureSection;
