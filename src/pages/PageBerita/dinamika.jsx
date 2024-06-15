import Navbar from "../../component/Navbar.jsx"
import Footer from "../../component/Footer.jsx"
import BeritaDinamika from "../../component/template-berita/BeritaDinamika.jsx";

export default function Dinamika() {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <div className="lg:px-20 md:px-10 px-4">
            <BeritaDinamika />
        </div>
        <Footer />
      </div>
    </>
  );
}
