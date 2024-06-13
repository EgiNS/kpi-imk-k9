import Footer from "../../component/Footer.jsx";
import Navbar from "../../component/Navbar.jsx"
import BuatPengaduan from "../../component/pengaduan/BuatPengaduan.jsx"

export default function Struktur() {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <BuatPengaduan />
      </div>
      <Footer />
    </>
  );
}
