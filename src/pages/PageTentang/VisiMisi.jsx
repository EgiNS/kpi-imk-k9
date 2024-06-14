import Navbar from "../../component/Navbar.jsx"
import Footer from "../../component/Footer.jsx"
import VisidanMisi from "../../component/tentang/visidanmisi.jsx"

export default function VisiMisi() {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <div className="lg:px-20 md:px-10 px-4">
            <VisidanMisi />
        </div>
        <Footer />
      </div>
    </>
  );
}