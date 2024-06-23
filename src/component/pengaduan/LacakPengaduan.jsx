import React, { useState, useEffect } from 'react';
import searchIcon from '/img/search.svg'; 
import Breadcrumbs from '../Breadcrumb';

export default function LacakPengaduan() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      setIsProcessing(true);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='lg:px-32 md:px-16 sm:px-12 px-8'>
      <div className="mt-12 mb-6">
        <Breadcrumbs />
      </div>
      <div className='p-6 pt-2 shadow-md my-6 rounded-xl'>
        <h1 className="text-center md:text-3xl text-2xl text-[#420101] font-bold mt-16 mb-4">
          Telusuri Aduan Penyiaran Anda
        </h1>
        
        <div className="flex justify-center mt-12 mb-40">
          <div className="flex justify-center mt-4 w-full">
            <div>
              <div className='flex flex-row w-full'>
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Masukkan Nomor Aduan"
                    className="w-full px-4 py-2 border border-[#CEABA5] rounded-lg focus:outline-none focus:border-[#9D262A] focus:ring-1 focus:ring-[#9D262A] pr-10"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onKeyPress={handleKeyPress}
                  />
                    <img src={searchIcon} alt="Search" style={{ position: 'absolute', top: '50%', right: '20px', transform: 'translateY(-50%)', width: '20px', height: '20px', fontWeight: 'bold'}} /> 
                </div>
                <div className="bg-[#9D262A] text-white rounded-xl px-5 py-1 text-center cursor-pointer ml-2 flex items-center" onClick={handleSearch}>
                  <p>Cari</p>
                </div>
              </div>
              {isProcessing && (
                <div className="mt-4 text-center">
                  Aduan anda sedang <span className='text-red-800 font-bold'>diproses</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
