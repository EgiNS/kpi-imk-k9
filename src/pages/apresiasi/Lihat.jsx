import Footer from "../../component/Footer.jsx";
import Navbar from "../../component/Navbar.jsx"
import LihatApresiasi from "../../component/apresiasi/LihatApresiasi.jsx"

export default function Struktur() {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <LihatApresiasi />
      </div>
      <Footer />
    </>
  );
}
