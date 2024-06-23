import Navbar from "../../component/Navbar.jsx"
import Footer from "../../component/Footer.jsx"
import Newsletter from "../../component/template-berita/Newsletter.jsx";

export default function newslatter() {
  return (
    <>
      <Navbar />
      <div className="sm:pt-24 pt-12">
        <div className="lg:px-20 md:px-10 px-4">
            <Newsletter />
        </div>
        <Footer />
      </div>
    </>
  );
}
