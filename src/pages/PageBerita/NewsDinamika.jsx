import Navbar from "../../component/Navbar.jsx"
import Footer from "../../component/Footer.jsx"
import DetailDinamika from "../../component/template-berita/DetailDinamika.jsx";

export default function NewsDinamika() {
  return (
    <>
      <Navbar />
      <div className="sm:pt-24 pt-12">
        <div className="lg:px-20 md:px-10 px-4">
            <DetailDinamika />
        </div>
        <Footer />
      </div>
    </>
  );
}