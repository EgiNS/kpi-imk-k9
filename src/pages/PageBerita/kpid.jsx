import Navbar from "../../component/Navbar.jsx"
import Footer from "../../component/Footer.jsx"
import Kpid from "../../component/template-berita/BeritaKPID.jsx";

export default function kpid() {
  return (
    <>
      <Navbar />
      <div className="sm:pt-24 pt-12">
        <div className="lg:px-20 md:px-10 px-4">
            <Kpid />
        </div>
        <Footer />
      </div>
    </>
  );
}