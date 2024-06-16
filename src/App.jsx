import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Beranda from "./pages/Beranda";
import Struktur from "./pages/Struktur";
import Profil from "./pages/Profil";
import DipaKPI from "./pages/DipaKPI";
import SIKST from "./pages/SIKST";
import LaporanAT from "./pages/LaporanAT";
import BukuKPI from "./pages/BukuKPI";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Beranda /> }/>
          <Route path="/struktur" element={ <Struktur /> }/>
          <Route path="/profil" element={ <Profil /> }/>
          <Route path="/dipaKPI" element={ <DipaKPI /> }/>
          <Route path="/sikst" element={ <SIKST /> }/>
          <Route path="/laporanakhir" element={ <LaporanAT /> }/>
          <Route path="/bukuKPI" element={ <BukuKPI /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
