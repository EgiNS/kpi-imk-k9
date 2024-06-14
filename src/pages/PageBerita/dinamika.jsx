import Navbar from "../../component/Navbar.jsx"
import Footer from "../../component/Footer.jsx"

export default function dinamika() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow lg:px-20 md:px-10 px-4 pt-24">
          <div className="mx-auto mt-8 mb-28">
            <h1 className="font-bold text-[#420101] md:text-3xl text-2xl mb-6">Dinamika Penyiaran</h1>
            <p className="mt-4 text-gray-500 md:text-lg text-lg mb-28">No news available for Dinamika Penyiaran</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
