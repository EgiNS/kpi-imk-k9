import Footer from "../component/Footer.jsx";
import Navbar from "../component/Navbar.jsx"
import Berita from "../component/beranda/Berita.jsx";
import CalendarAgenda from "../component/beranda/CalendarAgenda.jsx";
import Hero from "../component/beranda/Hero.jsx"
import Kajian from "../component/beranda/Kajian.jsx";
import Layanan from "../component/beranda/Layanan.jsx"
import Video from "../component/beranda/Video.jsx";

export default function Beranda() {
  return (
    <div className="bg-[#F9F9FB]">
      <Navbar />
      <div className="pt-24">
        <Hero />
        <div className="lg:px-20 md:px-10 px-4">
            <Layanan />
            <Berita />
            <Kajian />
            <Video />
            <CalendarAgenda />
        </div>
        <Footer />
      </div>
    </div>
  );
}
