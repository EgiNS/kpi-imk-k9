import React, { useState,useEffect } from "react";
import Footer from "../../component/Footer.jsx";
import Navbar from "../../component/Navbar.jsx";
import { dataLaporan } from "../../component/publikasi/DataLaporan.js";
import Breadcrumbs from "../../component/Breadcrumb.jsx";

export default function LaporanAT() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredBerita = dataLaporan.filter((berita) =>
    berita.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="pt-32 lg:px-20 md:px-10 px-5">
        <div>
          <div className="mt-5 mb-2">
            <Breadcrumbs />
          </div>
          <h1 className="text-center md:text-3xl sm:text-2xl text-lg text-[#420101] font-bold lg:mb-6 mb-2 mt-2">
            LAPORAN AKHIR TAHUN
          </h1>
          <div className="flex flex-row justify-center mb-7">
            <input
              type="text"
              placeholder="Cari laporan akhir tahun.."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="sm:w-2/5 w-3/4 px-4 py-2 border border-[#CEABA5] rounded-l-lg focus:outline-none focus:border-[#9D262A] focus:ring-1 focus:ring-[#9D262A]"
            />
            <img
              src="/img/search.svg"
              alt=""
              className="bg-red-800 px-3 rounded-r-lg cursor-pointer"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center mb-10">
          {filteredBerita.map((item) => (
            <div
              data-aos="fade-up"
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
                <div
                  className="relative flex justify-center items-center overflow-hidden rounded-lg"
                  style={{
                    height: "200px",
                    width: "200px",
                  }}
                >
                  <img src={item.img} alt="" />
                </div>
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
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
