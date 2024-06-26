import Navbar from "../../component/Navbar.jsx"
import Footer from "../../component/Footer.jsx"
import BeritaKPID from "../../component/template-berita/DetailKPID.jsx";

export default function newskpid() {
  return (
    <>
      <Navbar />
      <div className="sm:pt-24 pt-12">
        <div className="lg:px-20 md:px-10 px-4">
            <BeritaKPID />
        </div>
        <Footer />
      </div>
    </>
  );
}