import Navbar from "../../component/Navbar.jsx"
import Footer from "../../component/Footer.jsx"
import PengawasanPenyiaran from "../../component/struktur/Pengawasan.jsx"
export default function Pengawasan() {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <div className="lg:px-20 md:px-10 px-4">
            <PengawasanPenyiaran />
        </div>
        <Footer />
      </div>
    </>
  );
}