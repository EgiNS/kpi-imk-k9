// import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { kajianData } from "./DataBeranda";

export default function Kajian() {
  return (
    <div className="bg-[#F9F9FB]">
      <h1 className="text-center md:text-3xl text-2xl text-[#420101] font-bold mb-2">
        Kajian
      </h1>
      <div className="w-full grid md:grid-rows-1 md:grid-cols-5 sm:grid-cols-3 sm:grid-rows-2 min-[500px]:grid-rows-3 min-[500px]:grid-cols-2 gap-x-2">
        {kajianData.map((item) => (
          <div key={item.id} className="p-4 rounded-2x">
            <img src={item.img} alt="" className="w-full cursor-pointer" />
            <div>
              <h2 className="text-lg font-semibold my-3">{item.title}</h2>
              <p className="text-sm">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 text-right">
        <Link to="/kajian" className="text-[#420101] font-semibold hover:underline">
          Lihat Selengkapnya <span className="font-extrabold">→</span>
        </Link>
      </div>
      <div className="border-b-2 border-[#CEABA5] mt-5 mb-10"></div>
    </div>
  );
}
