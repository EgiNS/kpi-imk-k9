// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { newsData } from './DataBeranda';
import { Link } from 'react-router-dom';
import BeritaNonNewsletter from './BeritaNonNewsletter';
import BeritaNewsletter from './BeritaNewsletter';

const Berita = () => {
    const [activeTab, setActiveTab] = useState('Berita Terkini');
  
    return (
      <div className="w-full max-w-7xl mx-auto mt-8">
        <h1 className="font-bold text-[#420101] md:text-3xl text-2xl mb-2">Informasi</h1>
        <div className="flex border-b-2 border-[#CEABA5] overflow-x-auto no-scrollbar">
          {Object.keys(newsData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:text-md text-sm font-medium text-center cursor-pointer text-[#420101] whitespace-nowrap ${
                activeTab === tab ? 'border-b-4 border-[#CEABA5]' : ''
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {
          activeTab !== "Newsletter" ?
          <BeritaNonNewsletter items={newsData[activeTab]} url={newsData[activeTab][0].url} />
          :
          <BeritaNewsletter items={newsData[activeTab]} />
        }
        
        {newsData[activeTab].length === 0 && (
          <p className="mt-4 text-gray-500">No news available for {activeTab}</p>
        )}
        <div className="mt-5 text-right">
          <Link to={newsData[activeTab][0].url} className="text-[#420101] font-semibold hover:underline">
            Lihat Selengkapnya <span className='font-extrabold'>→</span>
          </Link>
        </div>
        <div className='border-b-2 border-[#CEABA5] mt-5 mb-10'></div>
      </div>
    );
  };

  export default Berita;