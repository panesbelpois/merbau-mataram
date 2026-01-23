
import HeroSection from '../components/HeroSection.jsx';
import VillageDescription from '../components/VillageDescription.jsx';
import VillageStats from '../components/VillageStats.jsx';
import VillageCommodities from '../components/VillageCommodities.jsx';

// Halaman ini sekarang bertindak sebagai halaman "Profil Desa" penuh
function ProfilDesa() {
  return (
    <div className="min-h-screen bg-white">
      {/* Container utama untuk konten halaman */}
      <div className="w-full">
        <HeroSection />

        <VillageDescription />
        <VillageStats />
        <VillageCommodities />
      </div>
    </div>
  );
}

export default ProfilDesa;
