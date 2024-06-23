// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { dataReg } from "./DataRegulasi";
import Aos from "aos";

const RegulasiComp = () => {
  const [activeTab, setActiveTab] = useState("Undang-Undang");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-aos="fade-up" className="p-6 pt-2 shadow-md my-6 rounded-xl">
      <h1 className="text-center md:text-3xl sm:text-2xl text-lg text-[#420101] font-bold lg:mb-4 mb-2">
        Regulasi KPI
      </h1>
      <div className="w-full max-w-7xl mx-auto mt-8">
        <div className="flex border-b-2 border-[#CEABA5] overflow-x-auto no-scrollbar">
          {Object.keys(dataReg).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:text-md text-sm font-medium text-center cursor-pointer text-[#420101] whitespace-nowrap ${
                activeTab === tab ? "border-b-4 border-[#CEABA5]" : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-6">
          {dataReg[activeTab].map((item) => (
            <div key={item.id} className="flex flex-row gap-x-3">
              {activeTab === "Undang-Undang" ? (
                <a
                  href={item.link}
                  target="_blank"
                  className="group flex items-center gap-x-3 hover:underline border-b w-full mb-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    width={12}
                    className="icon sm:block hidden"
                  >
                    <path
                      className="fill-current text-[#420101] group-hover:text-[#420101a2]"
                      d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"
                    />
                  </svg>
                  {item.title}
                </a>
              ) : (
                <div className="border-b w-full mb-2 pb-1">
                  <div className="flex items-center gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      width={12}
                      className="icon sm:block hidden"
                    >
                      <path
                        className="fill-current text-[#420101] group-hover:text-[#420101a2]"
                        d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"
                      />
                    </svg>
                    <a
                      href={item.link}
                      target="_blank"
                      className="hover:underline flex-1"
                    >
                      {item.title}
                    </a>
                  </div>
                  <div className="sm:pl-6 text-gray-600 text-sm">
                    {item.ket}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {dataReg[activeTab].length === 0 && (
          <p className="mt-4 text-gray-500">
            No news available for {activeTab}
          </p>
        )}
        <div className="mt-5 mb-10"></div>
      </div>
    </div>
  );
};

export default RegulasiComp;
