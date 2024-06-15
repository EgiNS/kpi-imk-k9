import React, { useState } from 'react';
import kpid from './DataNewsletter';
import { Link } from 'react-router-dom';
import BeritaNewsletter from '../beranda/BeritaNewsletter';

const Newsletter = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(kpid.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = kpid.slice(indexOfFirstItem, indexOfLastItem);

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
      <h1 className="font-bold text-[#420101] md:text-3xl text-2xl mb-6">Newsletter</h1>
      <h3 className="font-medium text-[#000000] md:text-base text-base mb-4">
        Menampilkan {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, kpid.length)} dari {kpid.length} Newsletter
      </h3>
      <div className="flex overflow-x-auto no-scrollbar"></div>
      <BeritaNewsletter items={currentItems} />

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
};

export default Newsletter;