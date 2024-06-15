import Footer from "../../component/Footer.jsx";
import Navbar from "../../component/Navbar.jsx"
import AlurPengaduan from "../../component/pengaduan/AlurPengaduan.jsx"

export default function Struktur() {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <AlurPengaduan />
      </div>
      <Footer />
    </>
  );
}
