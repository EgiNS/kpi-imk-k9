import Navbar from "../../component/Navbar.jsx"
import Footer from "../../component/Footer.jsx"
import Struktur from "../../component/tentang/struktur.jsx"

export default function StrukturSekretariat() {
  return (
    <>
      <Navbar />
      <div className="sm:pt-24 pt-12">
        <div className="lg:px-20 md:px-10 px-4">
            <Struktur />
        </div>
        <Footer />
      </div>
    </>
  );
}