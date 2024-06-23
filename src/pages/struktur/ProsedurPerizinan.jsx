import Navbar from "../../component/Navbar.jsx"
import Footer from "../../component/Footer.jsx"
import ProsedurPerizinan from "../../component/struktur/Prosedur.jsx"
export default function ProsedurIzin() {
  return (
    <>
      <Navbar />
      <div className="sm:pt-24 pt-12 bg-[#F9F9FB]">
        <div className="lg:px-20 md:px-10">
            <ProsedurPerizinan />
        </div>
        <Footer />
      </div>
    </>
  );
}