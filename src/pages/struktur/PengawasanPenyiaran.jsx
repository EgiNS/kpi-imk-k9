import Navbar from "../../component/Navbar.jsx"
import Footer from "../../component/Footer.jsx"
import PengawasanPenyiaran from "../../component/struktur/Pengawasan.jsx"
export default function Pengawasan() {
  return (
    <>
      <Navbar />
      <div className="sm:pt-24 pt-12 bg-[#F9F9FB]">
        <div className="lg:px-20 md:px-10">
            <PengawasanPenyiaran />
        </div>
        <Footer />
      </div>
    </>
  );
}