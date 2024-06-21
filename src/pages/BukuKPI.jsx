import Footer from "../component/Footer.jsx";
import Navbar from "../component/Navbar.jsx";
import { dataBuku } from "../component/publikasi/DataBuku.js";

export default function BukuKPI() {
    return (
    <>
      <Navbar />
        <div className="pt-24 lg:px-20 md:px-10 px-4">
            <div>
                <h1 className="text-2xl font-bold pt-10 mb-5"> BUKU KPI </h1>
                <h2 className="font-bold mb-0"> Detail </h2>
                <h3 className="mb-10"> Ditayangkan: 30 Desember 2022</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center mb-10">
                {dataBuku.map((item) => (
                  <div key={item.id} className="p-4 rounded-2xl shadow-md w-full flex flex-col items-center h-full">
                    <h3 className="text-lg font-semibold mb-2 text-center">{item.title}</h3>
                    <div className="flex-grow flex flex-col items-center justify-center mb-4 w-full">
                        <div className="relative" style={{ height: '200px', width: '200px' }}>
                            <img src={item.img} alt={item.title} className="absolute top-0 left-0 w-full h-full object-cover rounded-t-2xl" />
                        </div>
                        <p className="text-sm text-gray-600 text-center mt-4">unduh file:</p>
                    </div>
                    <a href="#some-link" className="text-sm text-gray-600 text-center hover:underline hover:text-[#9D262A]">{item.title}</a>
                </div>
                ))}
            </div>
        </div>
      <Footer />
    </>
  );
}