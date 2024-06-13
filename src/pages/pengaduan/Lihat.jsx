import Footer from "../../component/Footer.jsx";
import Navbar from "../../component/Navbar.jsx"
import LihatPengaduan from "../../component/pengaduan/LihatPengaduan.jsx"

export default function Struktur() {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <LihatPengaduan />
      </div>
      <Footer />
    </>
  );
}
