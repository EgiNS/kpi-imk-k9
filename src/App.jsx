import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Beranda from "./pages/Beranda";
import Apresiasi from "./pages/apresiasi/Lihat";
import Pengaduan from "./pages/pengaduan/Alur";
import BuatPengaduan from "./pages/pengaduan/Buat";
import LihatPengaduan from "./pages/pengaduan/Lihat";
import LacakPengaduan from "./pages/pengaduan/Lacak";
import ProsedurPerizinan from "./pages/struktur/ProsedurPerizinan";
import PengawasanPenyiaran from "./pages/struktur/PengawasanPenyiaran";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Beranda /> }/>
          <Route path="/apresiasi" element={ <Apresiasi /> }/>
          <Route path="/pengaduan" element={ <Pengaduan /> }/>
          <Route path="/buat-pengaduan" element={<BuatPengaduan />} />
          <Route path="/lihat-pengaduan" element={<LihatPengaduan />} />
          <Route path="/lacak-pengaduan" element={<LacakPengaduan />} />
          <Route path="/prosedur-perizinan" element={<ProsedurPerizinan />}/>
          <Route path="/pengawasan-penyiaran" element={<PengawasanPenyiaran />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
