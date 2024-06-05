// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { newsData } from './DataBeranda';

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
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-8">
          {newsData[activeTab].map((item) => (
            <div key={item.id} className="p-4 rounded-2xl shadow grid sm:grid-cols-6 grid-cols-1 sm:grid-rows-1 grid-rows-2 gap-x-3 bg-[#EDDBD9]">
              <div style={{backgroundImage: `url(${item.img})`}} className="sm:col-span-2 bg-cover bg-center"/>
              <div className='sm:col-span-4'>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-xs">{item.date}</p>
                <p className="mt-4 text-sm">{item.location} - {item.content}</p>
              </div>
            </div>
          ))}
        </div>
        {newsData[activeTab].length === 0 && (
          <p className="mt-4 text-gray-500">No news available for {activeTab}</p>
        )}
        <div className="mt-5 text-right">
          <button className="text-[#420101] font-semibold hover:underline">
            Lihat Selengkapnya <span className='font-extrabold'>→</span>
          </button>
        </div>
        <div className='border-b-2 border-[#CEABA5] mt-5 mb-10'></div>
      </div>
    );
  };

  export default Berita;