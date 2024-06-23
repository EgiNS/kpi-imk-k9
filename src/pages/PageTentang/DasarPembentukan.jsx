import Navbar from "../../component/Navbar.jsx"
import Footer from "../../component/Footer.jsx"
import Dasar from "../../component/tentang/dasar.jsx"

export default function DasarPembentukan() {
  return (
    <>
      <Navbar />
      <div className="sm:pt-24 pt-12">
        <div className="lg:px-20 md:px-10 px-4">
            <Dasar />
        </div>
        <Footer />
      </div>
    </>
  );
}