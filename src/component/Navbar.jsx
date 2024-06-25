import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import logo from "/img/logo_kpi.png";
import loginLogo from "/img/login.svg";
import user from "/img/user 1.svg";
import hamburger from "/img/hamburger.svg"; // sesuaikan dengan path ikon hamburger Anda
import close from "/img/close.svg"; // sesuaikan dengan path ikon close Anda
import loginHoverLogo from "/img/loginHoverLogo.svg";

export default function NavBar() {
  const [isHovered, setIsHovered] = useState(false);

  const [openMenu, setOpenMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);


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

  useEffect(() => {
    // Check login status from sessionStorage
    const loggedIn = sessionStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleUserIconClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    swal({
      title: 'Sukses',
      text: 'Logout Berhasil!',
      icon: 'success',
      buttons: {
        confirm: {
          text: 'OK',
          value: true,
          className: 'bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
        },
      },
    });
  };

  return (
    <nav className="bg-[#9D262A] fixed w-sceen z-[100]" ref={menuRef}>
      <div className="flex items-center justify-between sm:h-24 h-14 sm:py-4 py-3 sm:px-8 px-4 w-screen">
        <Link to="/">
          <img src={logo} alt="Logo" className="sm:h-16 h-9" />     
        </Link>
        <div className="hidden min-[925px]:flex gap-x-3 items-center lg:text-base md:text-sm">
          <Link to="/" className="bg-[#F2EAEA] rounded-md px-4 py-3 cursor-pointer relative">
            Beranda
          </Link>
          <div className="relative">
            <div className="group">
              <button
                className="bg-[#F2EAEA] rounded-md px-4 py-3 cursor-pointer flex items-center"
              >
                Struktur Penyiaran
                <img src="/img/arrow_down.svg" alt="" className='inline h-4 ml-2' />
              </button>
              <div className='hidden group-hover:block absolute top-full left-0'>
                <div className=" mt-1 w-48 bg-[#F2EAEA] border border-gray-200 rounded-md shadow-lg z-10">
                  <Link to="/prosedur-perizinan" className="text-sm block px-4 py-2 hover:bg-gray-100">Prosedur Perizinan</Link>
                  <Link to="/pengawasan-penyiaran" className="text-sm block px-4 py-2 hover:bg-gray-100">Pengawasan Penyiaran</Link>
                </div>
              </div>
            </div>
          </div>
          <Link to="/regulasi" className="bg-[#F2EAEA] rounded-md px-4 py-3 cursor-pointer relative">
            Regulasi
          </Link>
          <div className="relative">
            <div className="group">
              <button
                className="bg-[#F2EAEA] rounded-md px-4 py-3 cursor-pointer flex items-center"
              >
                Publikasi
                <img src="/img/arrow_down.svg" alt="" className='inline h-4 ml-2' />
              </button>
              <div className='hidden group-hover:block absolute top-full left-0'>
                <div className=" mt-1 w-48 bg-[#F2EAEA] border border-gray-200 rounded-md shadow-lg z-10">
                <Link to="/IKPSTV" className="text-sm block px-4 py-2 hover:bg-gray-100">Survei Indeks Kualitas Siaran Televisi</Link>
                <Link to="/DIPA-KPI" className="text-sm block px-4 py-2 hover:bg-gray-100">DIPA KPI</Link>
                <Link to="/laporan-akhir-tahun" className="text-sm block px-4 py-2 hover:bg-gray-100">Laporan Akhir Tahun</Link>
                <Link to="/buku-KPI" className="text-sm block px-4 py-2 hover:bg-gray-100">Buku KPI</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="group">
                <button
                  className="bg-[#F2EAEA] rounded-md px-4 py-3 cursor-pointer flex items-center"
                >
                  Layanan Aplikasi
                  <img src="/img/arrow_down.svg" alt="" className='inline h-4 ml-2' />
                </button>
                <div className='hidden group-hover:block absolute top-full left-0'>
                  <div className=" mt-1 w-48 bg-[#F2EAEA] border border-gray-200 rounded-md shadow-lg z-10">
                  <a href='http://smiled.kpi.go.id/' target='_blank' className="text-sm block px-4 py-2 hover:bg-gray-100">Data Lembaga Penyiaran</a>
                  <a href='http://ssj.kpi.go.id/' target='_blank' className="text-sm block px-4 py-2 hover:bg-gray-100">Konten Siaran Lokal</a>
                  <a href='http://ppid.kpi.go.id/' target='_blank' className="text-sm block px-4 py-2 hover:bg-gray-100">PPID</a>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className='flex flex-row gap-x-5'>
        <div className="flex flex-row gap-x-5 min-[925px]:gap-x-10 items-center">
        <button
            className="min-[925px]:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src={isMenuOpen ? close : hamburger} alt="Menu" className="sm:h-8 h-5" />
          </button>
      {isLoggedIn ? (
        <div className="relative">
          <img
            src={user}
            alt="User Icon"
            className="sm:h-8 h-6 cursor-pointer"
            onClick={handleUserIconClick}
          />
          {dropdownVisible && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <div className="px-4 py-2">Hello User</div>
              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-red-500"
                onClick={handleLogout}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      ) : (
        <Link
          to="/login"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex items-center space-x-2 static"
        >
          <div className='w-8 min-[925px]:invisible min-[925px]:block hidden'></div>
          {isHovered && <span className="min-[925px]:absolute min-[925px]:right-[86px] min-[925px]:block hidden text-sm sm:text-base transform duration-300 font-medium text-white ease-in-out">Login</span>}
          <img src={isHovered ? loginHoverLogo : loginLogo} alt="Login" className="min-[925px]:absolute min-[925px]:right-10 sm:h-8 h-5 duration-300 ease-in-out transform" />
        </Link>
      )}
    </div>
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
                <Link to="/prosedur-perizinan" className="text-sm block px-7 border-b-2 py-2 hover:bg-gray-100">Prosedur Perizinan</Link>
                <Link to="/pengawasan-penyiaran" className="text-sm block px-7 py-2 hover:bg-gray-100">Pengawasan Penyiaran</Link>
              </div>
            )}
          </div>
          <Link to="/regulasi" className="bg-[#F2EAEA] border-b-2 px-4 py-3 cursor-pointer w-full">
            Regulasi
          </Link>
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
                <Link to="/IKPSTV" className="text-sm block border-b-2 px-7 py-2 hover:bg-gray-100">Survei Indeks Kualitas Siaran Televisi</Link>
                <Link to="/DIPA-KPI" className="text-sm block border-b-2 px-7 py-2 hover:bg-gray-100">DIPA KPI</Link>
                <Link to="/laporan-akhir-tahun" className="text-sm block border-b-2 px-7 py-2 hover:bg-gray-100">Laporan Akhir Tahun</Link>
                <Link to="/buku-KPI" className="text-sm block px-7 py-2 hover:bg-gray-100">Buku KPI</Link>
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
                <a href="http://smiled.kpi.go.id/" target='_blank' className="text-sm block border-b-2 px-7 py-2 hover:bg-gray-100">Data Lembaga Penyiaran</a>
                <a href="http://ssj.kpi.go.id/" target='_blank' className="text-sm block border-b-2 px-7 py-2 hover:bg-gray-100">Konten Siaran Lokal</a>
                <a href="http://ppid.kpi.go.id/" target='_blank' className="text-sm block px-7 py-2 hover:bg-gray-100">PPID</a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
