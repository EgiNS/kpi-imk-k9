import Footer from "../../component/Footer.jsx";
import Navbar from "../../component/Navbar.jsx"
import LihatApresiasi from "../../component/apresiasi/LihatApresiasi.jsx"

export default function Struktur() {
  return (
    <>
      <Navbar />
      <div className="sm:pt-24 pt-12">
        <LihatApresiasi />
      </div>
      <Footer />
    </>
  );
}
