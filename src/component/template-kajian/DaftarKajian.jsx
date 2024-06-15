import React, { useState } from 'react';
import DataKajian from './DataKajian';
import { Link } from 'react-router-dom';

const DaftarKajian = () => {

const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 10;
const totalPages = Math.ceil(DataKajian.length / itemsPerPage);

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = DataKajian.slice(indexOfFirstItem, indexOfLastItem);

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
      <h1 className="font-bold text-[#420101] md:text-3xl text-2xl mb-6">Kajian</h1>
      <h3 className="font-medium text-[#000000] md:text-base text-base mb-4">
        Menampilkan {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, DataKajian.length)} dari {DataKajian.length} Kajian </h3>
        <div className="w-full grid md:grid-rows-1 md:grid-cols-5 sm:grid-cols-3 sm:grid-rows-2 min-[500px]:grid-rows-3 min-[500px]:grid-cols-2 gap-x-2">
            {DataKajian.map((item) => (
            <div key={item.id} className="p-4 rounded-2xl bg-white">
                <img src={item.img} alt="" className="w-full cursor-pointer" />
                <div>
                    <Link to={`/kajian/${item.id}`} className="text-lg font-semibold hover:underline">{item.title}</Link>
                    <p className="text-sm mt-3">{item.date}</p>
                </div>
            </div>
            ))}
        </div>
    
        <div className="flex justify-center mt-8 mb-10">
            <nav className="inline-flex items-center space-x-1">
                <button 
                    onClick={handlePrevPage}
                    className={`px-3 py-1 border border-gray-300 rounded-l-md bg-white text-gray-700 hover:bg-gray-100 ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
                    disabled={currentPage === 1}>
                    {"<"}
                </button>
                    {totalPages === 1 ? (
                        <button className='px-3 py-1 border-[#9D262A] bg-[#9D262A] text-white'>1</button>
                    ) : totalPages === 2 ? (
                        <>
                        <button className={`px-3 py-1 border border-[#9D262A] ${currentPage === 1 && 'px-3 py-1 border-[#9D262A] bg-[#9D262A] text-white'}`} onClick={() => setCurrentPage(1)}>1</button>
                        <button className={`px-3 py-1 border border-[#9D262A] ${currentPage === 2 && 'px-3 py-1 border-[#9D262A] bg-[#9D262A] text-white'}`} onClick={() => setCurrentPage(2)}>2</button>
                        </>
                    ) : (
                        <>
                        <button className={`px-3 py-1 border border-gray-300 bg-white text-gray-700 font-bold`}>{currentPage}</button>
                        {currentPage < totalPages && <span className="px-3 py-1 border border-gray-300 bg-white text-gray-700">...</span>}
                        <button className={`px-3 py-1 border border-gray-300 bg-white text-gray-700 ${currentPage === totalPages && 'font-bold'}`} onClick={() => setCurrentPage(totalPages)}>{totalPages}</button>
                        </>
                    )}
                <button 
                    onClick={handleNextPage}
                    className={`px-3 py-1 border border-gray-300 rounded-r-md bg-white text-gray-700 hover:bg-gray-100 ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
                    disabled={currentPage === totalPages}
                >
                    {">"}
                </button>
            </nav>
      </div>
    </div>
  );
}

export default DaftarKajian;
