import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Beranda from "./pages/Beranda";
import Ikpstv from "./pages/publikasi/Ikpstv";
import Login from "./pages/Login/Login";
import Daftar from "./pages/Login/Daftar";
import Regulasi from "./pages/regulasi/Regulasi";
import BeritaTerkini from "./pages/PageBerita/terkini";
import BeritaKPID from "./pages/PageBerita/kpid";
import FullBeritaKPID from "./pages/PageBerita/newskpid";
import FullBeritaTerkini from "./pages/PageBerita/news";
import Newslatter from "./pages/PageBerita/newsletter";
import VisiMisi from "./pages/PageTentang/VisiMisi";
import DasarPembentukan from "./pages/PageTentang/DasarPembentukan";
import StrukturSekretariat from "./pages/PageTentang/StrukturSekretariat";
import Dinamika from "./pages/PageBerita/dinamika";
import NewsDinamika from "./pages/PageBerita/NewsDinamika";
import Apresiasi from "./pages/apresiasi/Lihat";
import Pengaduan from "./pages/pengaduan/Alur";
import BuatPengaduan from "./pages/pengaduan/Buat";
import LihatPengaduan from "./pages/pengaduan/Lihat";
import LacakPengaduan from "./pages/pengaduan/Lacak";
import ProsedurPerizinan from "./pages/struktur/ProsedurPerizinan";
import PengawasanPenyiaran from "./pages/struktur/PengawasanPenyiaran";
import Edaran from "./pages/edaran/Edaran";
import DetailEdaran from "./pages/edaran/DetailEdaran";
import Kajian from "./pages/PageKajian/kajian";
import FullKajian from "./pages/PageKajian/newskajian";
// import Struktur from "./pages/Struktur";
import Profil from "./pages/PageTentang/Profil";
import DipaKPI from "./pages/publikasi/DipaKPI";
// import SIKST from "./pages/SIKST";
import LaporanAT from "./pages/publikasi/LaporanAT";
import BukuKPI from "./pages/publikasi/BukuKPI";
import SiaranPers from "./pages/siaranpers/SiaranPers";
import DetailPers from "./pages/siaranpers/DetailPers";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Beranda /> }/>
          <Route path="/IKPSTV" element={ <Ikpstv /> }/>
          <Route path="/login" element={ <Login /> }/>
          <Route path="/daftar" element={ <Daftar /> }/>
          <Route path="/regulasi" element={ <Regulasi /> }/>
          <Route path="/berita-terkini/:slug" element={ <FullBeritaTerkini />}/>
          <Route path="/berita-KPID/:slug" element={ <FullBeritaKPID />}/>
          <Route path="/dinamika-penyiaran/:slug" element={ <NewsDinamika />}/>
          <Route path="/berita-terkini" element={ <BeritaTerkini />}/>
          <Route path="/berita-KPID" element={ <BeritaKPID />}/>
          <Route path="/dinamika-penyiaran" element={ <Dinamika />}/>
          <Route path="/newsletter" element={ <Newslatter />}/>
          <Route path="/visimisi" element={ <VisiMisi />}/>
          <Route path="/dasarpembentukan" element={ <DasarPembentukan />}/>
          <Route path="/struktursekretariat" element={ <StrukturSekretariat />}/>
          <Route path="/apresiasi" element={ <Apresiasi /> }/>
          <Route path="/pengaduan" element={ <Pengaduan /> }/>
          <Route path="/pengaduan/buat-pengaduan" element={<BuatPengaduan />} />
          <Route path="/pengaduan/lihat-pengaduan" element={<LihatPengaduan />} />
          <Route path="/pengaduan/lacak-pengaduan" element={<LacakPengaduan />} />
          <Route path="/prosedur-perizinan" element={<ProsedurPerizinan />}/>
          <Route path="/pengawasan-penyiaran" element={<PengawasanPenyiaran />}/>
          <Route path="/edaran-dan-sanksi" element={ <Edaran /> }/>
          <Route path="/edaran-dan-sanksi/:slug" element={ <DetailEdaran />} />
          <Route path="/siaran-pers" element={ <SiaranPers /> }/>
          <Route path="/siaran-pers/:slug" element={ <DetailPers />} />
          <Route path="/kajian" element={ <Kajian />}/>
          <Route path="/kajian/:slug" element={ <FullKajian />}/>
          {/* <Route path="/struktur" element={ <Struktur /> }/> */}
          <Route path="/profil" element={ <Profil /> }/>
          <Route path="/DIPA-KPI" element={ <DipaKPI /> }/>
          {/* <Route path="/sikst" element={ <SIKST /> }/> */}
          <Route path="/laporan-akhir-tahun" element={ <LaporanAT /> }/>
          <Route path="/buku-KPI" element={ <BukuKPI /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
