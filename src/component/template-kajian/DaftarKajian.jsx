import React, { useState, useEffect } from "react";
import DataKajian from "./DataKajian";
import { Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumb";

const DaftarKajian = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 10;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredBerita = DataKajian.filter((berita) =>
    berita.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBerita.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBerita.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mx-auto mt-8">
      <div className="mt-12 mb-6">
        <Breadcrumbs />
      </div>
      <h1 className="font-bold text-[#420101] md:text-3xl text-2xl mb-6">
        Kajian
      </h1>
      <div className="flex flex-row justify-center mb-7">
        <input
          type="text"
          placeholder="Cari kajian.."
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
      {
        filteredBerita.length == 0 ?
        <p className="font-medium text-xl text-gray-700 mb-12 text-center">Kajian tidak ditemukan</p>
        :
        <h3 className="font-medium text-[#000000] md:text-base text-base mb-4">
            Menampilkan {indexOfFirstItem + 1}-
            {Math.min(indexOfLastItem, filteredBerita.length)} dari{" "}
            {filteredBerita.length} Kajian{" "}
        </h3>
      }
      <div className="w-full grid md:grid-rows-1 md:grid-cols-5 sm:grid-cols-3 sm:grid-rows-2 min-[500px]:grid-rows-3 min-[500px]:grid-cols-2 gap-x-2">
        {currentItems.map((item) => (
          <div key={item.id} className="p-4 rounded-2xl bg-white">
            <img src={item.img} alt="" className="w-full cursor-pointer" />
            <div>
              <Link
                to={`/kajian/${item.slug}`}
                className="text-lg font-semibold hover:underline"
              >
                {item.title}
              </Link>
              <p className="text-sm mt-3">{item.date}</p>
            </div>
          </div>
        ))}
      </div>

      {
        filteredBerita.length == 0 ?
        ""
        :
        <div className="flex justify-center mt-8 mb-10">
            <nav className="inline-flex items-center space-x-1">
            <button
                onClick={handlePrevPage}
                className={`px-3 py-1 border border-gray-300 rounded-l-md bg-white text-gray-700 hover:bg-gray-100 ${
                currentPage === 1 && "opacity-50 cursor-not-allowed"
                }`}
                disabled={currentPage === 1}
            >
                {"<"}
            </button>
            {totalPages === 1 ? (
                <button className="px-3 py-1 border-[#9D262A] bg-[#9D262A] text-white">
                1
                </button>
            ) : totalPages === 2 ? (
                <>
                <button
                    className={`px-3 py-1 border border-[#9D262A] ${
                    currentPage === 1 &&
                    "px-3 py-1 border-[#9D262A] bg-[#9D262A] text-white"
                    }`}
                    onClick={() => setCurrentPage(1)}
                >
                    1
                </button>
                <button
                    className={`px-3 py-1 border border-[#9D262A] ${
                    currentPage === 2 &&
                    "px-3 py-1 border-[#9D262A] bg-[#9D262A] text-white"
                    }`}
                    onClick={() => setCurrentPage(2)}
                >
                    2
                </button>
                </>
            ) : (
                <>
                <button
                    className={`px-3 py-1 border border-gray-300 bg-white text-gray-700 font-bold`}
                >
                    {currentPage}
                </button>
                {currentPage < totalPages && (
                    <span className="px-3 py-1 border border-gray-300 bg-white text-gray-700">
                    ...
                    </span>
                )}
                <button
                    className={`px-3 py-1 border border-gray-300 bg-white text-gray-700 ${
                    currentPage === totalPages && "font-bold"
                    }`}
                    onClick={() => setCurrentPage(totalPages)}
                >
                    {totalPages}
                </button>
                </>
            )}
            <button
                onClick={handleNextPage}
                className={`px-3 py-1 border border-gray-300 rounded-r-md bg-white text-gray-700 hover:bg-gray-100 ${
                currentPage === totalPages && "opacity-50 cursor-not-allowed"
                }`}
                disabled={currentPage === totalPages}
            >
                {">"}
            </button>
            </nav>
        </div>
      }
    </div>
  );
};

export default DaftarKajian;
