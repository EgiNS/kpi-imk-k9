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
import Dinamika from "./pages/PageBerita/Dinamika";
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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Beranda /> }/>
          <Route path="/ikpstv" element={ <Ikpstv /> }/>
          <Route path="/login" element={ <Login /> }/>
          <Route path="/daftar" element={ <Daftar /> }/>
          <Route path="/regulasi" element={ <Regulasi /> }/>
          <Route path="/terkini/:id" element={ <FullBeritaTerkini />}/>
          <Route path="/kpid/:id" element={ <FullBeritaKPID />}/>
          <Route path="/dinamika/:id" element={ <NewsDinamika />}/>
          <Route path="/terkini" element={ <BeritaTerkini />}/>
          <Route path="/kpid" element={ <BeritaKPID />}/>
          <Route path="/dinamika" element={ <Dinamika />}/>
          <Route path="/newsletter" element={ <Newslatter />}/>
          <Route path="/visimisi" element={ <VisiMisi />}/>
          <Route path="/dasarpembentukan" element={ <DasarPembentukan />}/>
          <Route path="/struktursekretariat" element={ <StrukturSekretariat />}/>
          <Route path="/apresiasi" element={ <Apresiasi /> }/>
          <Route path="/pengaduan" element={ <Pengaduan /> }/>
          <Route path="/buat-pengaduan" element={<BuatPengaduan />} />
          <Route path="/lihat-pengaduan" element={<LihatPengaduan />} />
          <Route path="/lacak-pengaduan" element={<LacakPengaduan />} />
          <Route path="/prosedur-perizinan" element={<ProsedurPerizinan />}/>
          <Route path="/pengawasan-penyiaran" element={<PengawasanPenyiaran />}/>
          <Route path="/edaran-dan-sanksi" element={ <Edaran /> }/>
          <Route path="/edaran-dan-sanksi/:id" element={ <DetailEdaran />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
