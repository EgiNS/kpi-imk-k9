import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import logo from "/img/logo_kpi.png";
import search from "/img/search.svg";
import user from "/img/user 1.svg";
import hamburger from "/img/hamburger.svg"; // sesuaikan dengan path ikon hamburger Anda
import close from "/img/close.svg"; // sesuaikan dengan path ikon close Anda

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleSubMenu = (menuIndex) => {
    setOpenMenu(openMenu === menuIndex ? null : menuIndex);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#9D262A] fixed w-sceen z-[100]" ref={menuRef}>
      <div className="flex items-center justify-between h-24 py-4 px-8 w-screen">
        <img src={logo} alt="Logo" className="h-16" />
        <div className="hidden min-[925px]:flex gap-x-3 items-center lg:text-base md:text-sm">
          <Link to="/" className="bg-[#F2EAEA] rounded-md px-4 py-3 cursor-pointer">
            Beranda
          </Link>
          <div className="relative">
            <button
              onClick={() => toggleSubMenu(1)}
              className="bg-[#F2EAEA] rounded-md px-4 py-3 cursor-pointer flex items-center"
            >
              Struktur Penyiaran
              <img src={openMenu === 1 ? "/img/arrow_up.svg" : "/img/arrow_down.svg"} alt="" className='inline h-4 ml-2' />
            </button>
            {openMenu === 1 && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#F2EAEA] border border-gray-200 rounded-md shadow-lg z-10">
                <Link to="/prosedur-perizinan" className="text-sm block px-4 py-2 hover:bg-gray-100">Prosedur Perizinan</Link>
                <Link to="/pengawasan-penyiaran" className="text-sm block px-4 py-2 hover:bg-gray-100">Pengawasan Penyiaran</Link>
              </div>
            )}
          </div>
          <Link to="/regulasi" className="bg-[#F2EAEA] rounded-md px-4 py-3 cursor-pointer">
            Regulasi
          </Link>
          <div className="relative">
            <button
              onClick={() => toggleSubMenu(3)}
              className="bg-[#F2EAEA] rounded-md px-4 py-3 cursor-pointer flex items-center"
            >
              Publikasi
              <img src={openMenu === 3 ? "/img/arrow_up.svg" : "/img/arrow_down.svg"} alt="" className='inline h-4 ml-2' />
            </button>
            {openMenu === 3 && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#F2EAEA] border border-gray-200 rounded-md shadow-lg z-10">
                <Link to="/ikpstv" className="text-sm block px-4 py-2 hover:bg-gray-100">Survei Indeks Kualitas Siaran Televisi</Link>
                <Link to="#" className="text-sm block px-4 py-2 hover:bg-gray-100">DIPA KPI</Link>
                <Link to="#" className="text-sm block px-4 py-2 hover:bg-gray-100">Laporan Akhir Tahun</Link>
                <Link to="#" className="text-sm block px-4 py-2 hover:bg-gray-100">Buku KPI</Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleSubMenu(4)}
              className="bg-[#F2EAEA] rounded-md px-4 py-3 cursor-pointer flex items-center"
            >
              Layanan Aplikasi
              <img src={openMenu === 4 ? "/img/arrow_up.svg" : "/img/arrow_down.svg"} alt="" className='inline h-4 ml-2' />
            </button>
            {openMenu === 4 && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-[#F2EAEA] border border-gray-200 rounded-md shadow-lg z-10">
                <Link to="#" className="text-sm block px-4 py-2 hover:bg-gray-100">Portal Pengaduan</Link>
                <Link to="#" className="text-sm block px-4 py-2 hover:bg-gray-100">Data Lembaga Penyiaran</Link>
                <Link to="#" className="text-sm block px-4 py-2 hover:bg-gray-100">Konten Siaran Lokal</Link>
                <Link to="#" className="text-sm block px-4 py-2 hover:bg-gray-100">PPID</Link>
              </div>
            )}
          </div>
        </div>
        <div className='flex flex-row gap-x-5'>
          <div className="flex flex-row gap-x-5 min-[925px]:gap-x-10 items-center">
            <img src={search} alt="" className="h-6" />
            <Link to="/login"><img src={user} alt="" className="h-9" /></Link>
          </div>
          <button
            className="min-[925px]:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src={isMenuOpen ? close : hamburger} alt="Menu" className="h-8" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="min-[925px]:hidden flex flex-col items-center bg-[#9D262A] pb-4">
          <Link to="/" className="bg-[#F2EAEA] border-b-2 px-4 py-3 cursor-pointer w-full">
            Beranda
          </Link>
          <div className="relative w-full">
            <button
              onClick={() => toggleSubMenu(1)}
              className="bg-[#F2EAEA] border-b-2 px-4 py-3 cursor-pointer flex items-center justify-between w-full"
            >
              Struktur Penyiaran
              <img src={openMenu === 1 ? "/img/arrow_up.svg" : "/img/arrow_down.svg"} alt="" className='inline h-4 ml-2' />
            </button>
            {openMenu === 1 && (
              <div className="w-full bg-[#F2EAEA] border-gray-200 border-b-2 shadow-lg z-10">
                <Link to="#" className="text-sm block px-7 border-b-2 py-2 hover:bg-gray-100">Prosedur Perizinan</Link>
                <Link to="#" className="text-sm block px-7 py-2 hover:bg-gray-100">Pengawasan Penyiaran</Link>
              </div>
            )}
          </div>
          <div className="relative w-full">
            <button
              onClick={() => toggleSubMenu(2)}
              className="bg-[#F2EAEA] border-b-2 px-4 py-3 cursor-pointer flex items-center justify-between w-full"
            >
              Regulasi
              <img src={openMenu === 2 ? "/img/arrow_up.svg" : "/img/arrow_down.svg"} alt="" className='inline h-4 ml-2' />
            </button>
            {openMenu === 2 && (
              <div className="w-full bg-[#F2EAEA] border-gray-200 shadow-lg z-10">
                <Link to="#" className="text-sm block border-b-2 px-7 py-2 hover:bg-gray-100">Undang-Undang</Link>
                <Link to="#" className="text-sm block border-b-2 px-7 py-2 hover:bg-gray-100">Peraturan KPI</Link>
                <Link to="#" className="text-sm block px-7 py-2 hover:bg-gray-100">MoU</Link>
              </div>
            )}
          </div>
          <div className="relative w-full">
            <button
              onClick={() => toggleSubMenu(3)}
              className="bg-[#F2EAEA] border-b-2 px-4 py-3 cursor-pointer flex items-center justify-between w-full"
            >
              Publikasi
              <img src={openMenu === 3 ? "/img/arrow_up.svg" : "/img/arrow_down.svg"} alt="" className='inline h-4 ml-2' />
            </button>
            {openMenu === 3 && (
              <div className="w-full bg-[#F2EAEA] border-gray-200 shadow-lg z-10">
                <Link to="/ikpstv" className="text-sm block border-b-2 px-7 py-2 hover:bg-gray-100">Survei Indeks Kualitas Siaran Televisi</Link>
                <Link to="#" className="text-sm block border-b-2 px-7 py-2 hover:bg-gray-100">DIPA KPI</Link>
                <Link to="#" className="text-sm block border-b-2 px-7 py-2 hover:bg-gray-100">Laporan Akhir Tahun</Link>
                <Link to="#" className="text-sm block px-7 py-2 hover:bg-gray-100">Buku KPI</Link>
              </div>
            )}
          </div>
          <div className="relative w-full">
            <button
              onClick={() => toggleSubMenu(4)}
              className="bg-[#F2EAEA] border-b-2 px-4 py-3 cursor-pointer flex items-center justify-between w-full"
            >
              Layanan Aplikasi
              <img src={openMenu === 4 ? "/img/arrow_up.svg" : "/img/arrow_down.svg"} alt="" className='inline h-4 ml-2' />
            </button>
            {openMenu === 4 && (
              <div className="w-full bg-[#F2EAEA] border-gray-200 shadow-lg z-10">
                <Link to="#" className="text-sm block border-b-2 px-7 py-2 hover:bg-gray-100">Portal Pengaduan</Link>
                <Link to="#" className="text-sm block border-b-2 px-7 py-2 hover:bg-gray-100">Data Lembaga Penyiaran</Link>
                <Link to="#" className="text-sm block border-b-2 px-7 py-2 hover:bg-gray-100">Konten Siaran Lokal</Link>
                <Link to="#" className="text-sm block px-7 py-2 hover:bg-gray-100">PPID</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
