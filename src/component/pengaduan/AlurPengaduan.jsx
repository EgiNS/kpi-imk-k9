import React from "react";
import { useNavigate } from "react-router-dom";

export default function AlurPengaduan() {
  const navigate = useNavigate();

  const handleBuatPengaduan = () => {
    navigate("/buat-pengaduan");
  };

  const handleLihatPengaduan = () => {
    navigate("/lihat-pengaduan");
  };

  const handleLacakPengaduan = () => {
    navigate("/lacak-pengaduan");
  };

  return (
    <div>
      <h1 className="text-center md:text-3xl text-2xl text-[#420101] font-bold mt-16 mb-4">
        Alur Pengaduan
      </h1>

      <div className="flex justify-center items-center flex-grow">
        <img src="/img/alur_pengaduan.png" alt="Alur Pengaduan" className="max-w-3xl w-full h-auto" />
      </div>

      <div className="flex md:flex-row flex-col justify-center md:space-x-8 md:space-y-0 space-y-4 mt-16 mb-16">
        <button className="bg-[#EDDBD9] text-[#410101] text-lg py-3 px-6 rounded" onClick={handleBuatPengaduan}>
          Buat Pengaduan
        </button>
        <button className="bg-[#EDDBD9] text-[#410101] text-lg py-3 px-6 rounded" onClick={handleLihatPengaduan}>
          Lihat Pengaduan
        </button>
        <button className="bg-[#EDDBD9] text-[#410101] text-lg py-3 px-6 rounded" onClick={handleLacakPengaduan}>
          Lacak Pengaduan
        </button>
      </div>
    </div>
  );
}
