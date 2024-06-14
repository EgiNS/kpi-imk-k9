import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Beranda from "./pages/Beranda";
import BeritaTerkini from "./pages/PageBerita/terkini";
import BeritaKPID from "./pages/PageBerita/kpid";
import FullBeritaKPID from "./pages/PageBerita/newskpid";
import FullBeritaTerkini from "./pages/PageBerita/news";
import DinamikaPenyiaran from "./pages/PageBerita/dinamika";
import Newslatter from "./pages/PageBerita/newsletter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Beranda/> }/>
          <Route path="/terkini/:id" element={ <FullBeritaTerkini />}/>
          <Route path="/kpid/:id" element={ <FullBeritaKPID />}/>
          <Route path="/terkini" element={ <BeritaTerkini />}/>
          <Route path="/kpid" element={ <BeritaKPID />}/>
          <Route path="/dinamika" element={ <DinamikaPenyiaran />}/>
          <Route path="/newslatter" element={ <Newslatter />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
