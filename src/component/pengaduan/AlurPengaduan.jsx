import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../Breadcrumb";

export default function AlurPengaduan() {
  const navigate = useNavigate();

  const handleBuatPengaduan = () => {
    navigate("/pengaduan/buat-pengaduan");
  };

  const handleLihatPengaduan = () => {
    navigate("/pengaduan/lihat-pengaduan");
  };

  const handleLacakPengaduan = () => {
    navigate("/pengaduan/lacak-pengaduan");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="lg:px-32 md:px-16 sm:px-12 px-8">
      <div className="mt-12">
        <Breadcrumbs />
      </div>

      <div className='p-6 pt-2 shadow-md my-6 rounded-xl'>
        <h1 className="text-center md:text-3xl text-2xl text-[#420101] font-bold mb-4">
          Alur Pengaduan
        </h1>

        <div data-aos="zoom-in" className="flex justify-center items-center flex-grow">
          <img
            src="/img/alur_pengaduan.png"
            alt="Alur Pengaduan"
            className="max-w-3xl w-full h-auto"
          />
        </div>

        <div className="flex md:flex-row flex-col justify-center md:space-x-8 md:space-y-0 space-y-4 mt-16 mb-16">
          <button
            className="bg-[#EDDBD9] text-[#410101] text-lg py-3 px-6 rounded"
            onClick={handleBuatPengaduan}
          >
            Buat Pengaduan
          </button>
          <button
            className="bg-[#EDDBD9] text-[#410101] text-lg py-3 px-6 rounded"
            onClick={handleLihatPengaduan}
          >
            Lihat Pengaduan
          </button>
          <button
            className="bg-[#EDDBD9] text-[#410101] text-lg py-3 px-6 rounded"
            onClick={handleLacakPengaduan}
          >
            Lacak Pengaduan
          </button>
        </div>
      </div>
    </div>
  );
}
