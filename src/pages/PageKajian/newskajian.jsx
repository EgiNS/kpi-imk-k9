import Navbar from "../../component/Navbar.jsx"
import Footer from "../../component/Footer.jsx"
import Kajian from "../../component/template-kajian/DetailKajian.jsx";

export default function newskajian() {
  return (
    <>
      <Navbar />
      <div className="sm:pt-24 pt-14">
        <div className="lg:px-20 md:px-10 px-4">
            <Kajian />
        </div>
        <Footer />
      </div>
    </>
  );
}