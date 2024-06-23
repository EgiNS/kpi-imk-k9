import Navbar from "../../component/Navbar.jsx"
import Footer from "../../component/Footer.jsx"
import ProsedurPerizinan from "../../component/struktur/Prosedur.jsx"
export default function ProsedurIzin() {
  return (
    <>
      <Navbar />
      <div className="pt-24 bg-[#F9F9FB]">
        <div className="lg:px-20 md:px-10 px-4">
            <ProsedurPerizinan />
        </div>
        <Footer />
      </div>
    </>
  );
}