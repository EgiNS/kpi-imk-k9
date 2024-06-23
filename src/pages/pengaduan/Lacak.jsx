import Footer from "../../component/Footer.jsx";
import Navbar from "../../component/Navbar.jsx"
import LacakPengaduan from "../../component/pengaduan/LacakPengaduan.jsx"

export default function Struktur() {
  return (
    <>
      <Navbar />
      <div className="sm:pt-24 pt-12">
        <LacakPengaduan />
      </div>
      <Footer />
    </>
  );
}
