import Navbar from "../../component/Navbar.jsx"
import Footer from "../../component/Footer.jsx"
import Terkini from "../../component/template-berita/BeritaTerkini.jsx";

export default function terkini() {
  return (
    <>
      <Navbar />
      <div className="sm:pt-24 pt-12">
        <div className="lg:px-20 md:px-10 px-4">
            <Terkini />
        </div>
        <Footer />
      </div>
    </>
  );
}
