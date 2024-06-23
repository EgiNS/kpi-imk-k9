import Footer from "../../component/Footer.jsx";
import Navbar from "../../component/Navbar.jsx"
import BuatPengaduan from "../../component/pengaduan/BuatPengaduan.jsx"

export default function Struktur() {
  return (
    <>
      <Navbar />
      <div className="sm:pt-24 pt-12">
        <BuatPengaduan />
      </div>
      <Footer />
    </>
  );
}
