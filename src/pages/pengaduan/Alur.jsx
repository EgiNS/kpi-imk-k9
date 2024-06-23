import Footer from "../../component/Footer.jsx";
import Navbar from "../../component/Navbar.jsx"
import AlurPengaduan from "../../component/pengaduan/AlurPengaduan.jsx"

export default function Struktur() {
  return (
    <>
      <Navbar />
      <div className="sm:pt-24 pt-12">
        <AlurPengaduan />
      </div>
      <Footer />
    </>
  );
}
