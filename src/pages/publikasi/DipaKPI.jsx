import { useEffect } from "react";
import Breadcrumbs from "../../component/Breadcrumb.jsx";
import Footer from "../../component/Footer.jsx";
import Navbar from "../../component/Navbar.jsx";
import { dataDIPA } from "../../component/publikasi/DataDIPA.js";

export default function DipaKPI() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="sm:pt-32 pt-20 lg:px-20 md:px-10 px-5">
        <div className="mt-5 mb-2">
          <Breadcrumbs />
        </div>
        <div>
          <h1 className="text-center md:text-3xl text-2xl text-[#420101] font-bold lg:mb-5 mb-2 mt-2">
            DIPA KPI
          </h1>
          {/* <h2 className="font-bold mb-0"> Detail </h2>
                <h3 className="mb-10"> Ditayangkan: 23 Juni 2023</h3> */}
          <p className="line-break text-indent-2 text-justify mb-10">
            Daftar Isian Pelaksanaan Anggaran (DIPA) adalah dokumen pelaksanaan
            anggaran yang disusun oleh Pengguna Anggaran/Kuasa Pengguna
            Anggaran. DIPA disusun berdasarkan Keputusan Presiden mengenai
            rincian anggaran belanja pemerintah pusat. DIPA berfungsi sebagai
            dasar pelaksanaan anggaran setelah mendapat pengesahan Menteri
            Keuangan.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center mb-10">
          {dataDIPA.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-2xl shadow-md w-full flex flex-col items-center"
            >
              <h3 className="text-lg font-semibold mb-2 text-center">
                {item.title}
              </h3>
              <div
                className="flex items-center justify-center mb-4"
                style={{ height: "200px", width: "200px" }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover rounded-2xl"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
              <a
                href={item.link}
                target="_blank"
                className="bg-[#9D262A] cursor-pointer hover:bg-[#94383b] text-white px-3 py-1 rounded-md flex flex-row gap-x-2 items-center justify-center"
              >
                <svg
                  width={14}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 512 512"
                >
                  <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                </svg>
                <p>Unduh File</p>
              </a>
              {/* <p className="text-sm text-gray-600 text-center mb-2">unduh file:</p> */}
              {/* <a href={item.link} target="_blank" className="text-sm text-gray-600 text-center mb-2 hover:underline hover:text-[#9D262A]">{item.title}</a> */}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
