import Navbar from "../../component/Navbar.jsx"
import Footer from "../../component/Footer.jsx"
import KajianDaftar from "../../component/template-kajian/DaftarKajian.jsx"

export default function kajian() {
  return (
    <>
      <Navbar />
      <div className="sm:pt-24 pt-14">
        <div className="lg:px-20 md:px-10 px-4">
            <KajianDaftar />
        </div>
        <Footer />
      </div>
    </>
  );
}