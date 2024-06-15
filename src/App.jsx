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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
