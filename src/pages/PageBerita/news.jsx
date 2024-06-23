import Navbar from "../../component/Navbar.jsx"
import Footer from "../../component/Footer.jsx"
import BeritaTerkini from "../../component/template-berita/DetailBerita.jsx";

export default function news() {
  return (
    <>
      <Navbar />
      <div className="sm:pt-24 pt-12">
        <div className="lg:px-20 md:px-10 px-4">
            <BeritaTerkini />
        </div>
        <Footer />
      </div>
    </>
  );
}