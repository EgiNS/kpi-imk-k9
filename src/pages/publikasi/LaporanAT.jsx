import Footer from "../../component/Footer.jsx";
import Navbar from "../../component/Navbar.jsx";
import { dataLaporan } from "../../component/publikasi/DataLaporan.js";

export default function LaporanAT() {
    return (
    <>
      <Navbar />
        <div className="pt-24 lg:px-20 md:px-10 px-4">
            <div>
                <h1 className="text-2xl font-bold pt-10 mb-5"> LAPORAN AKHIR TAHUN </h1>
                <h2 className="font-bold mb-0"> Detail </h2>
                <h3 className="mb-10"> Ditayangkan: 04 Januari 2023</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center mb-10">
                {dataLaporan.map((item) => (
                    <div key={item.id} className="p-4 rounded-2xl shadow-md w-full flex flex-col items-center">
                    <h3 className="text-lg font-semibold mb-2 text-center">{item.title}</h3>
                    <div className="flex items-center justify-center mb-4" style={{ height: '200px', width: '200px' }} >
                        <img src={item.img} alt={item.title} className="object-cover rounded-2xl" style={{ height: '100%', width: '100%' }}/>
                    </div>
                    <p className="text-sm text-gray-600 text-center mb-2">unduh file:</p>
                    <a href="#some-link" className="text-sm text-gray-600 text-center mb-2 hover:underline hover:text-[#9D262A]">{item.title}</a>
                    </div>
                ))}
            </div>
        </div>
      <Footer />
    </>
  );
}