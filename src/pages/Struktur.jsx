import Footer from "../component/Footer.jsx";
import Navbar from "../component/Navbar.jsx"
import Hero from "../component/beranda/Hero.jsx"

export default function Struktur() {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <Hero />
        <h1>Ini struktur</h1>
      </div>
      <Footer />
    </>
  );
}
