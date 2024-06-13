import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Beranda from "./pages/Beranda";
import Struktur from "./pages/Struktur";
import Ikpstv from "./pages/publikasi/Ikpstv";
import Login from "./pages/Login/Login";
import Daftar from "./pages/Login/Daftar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Beranda /> }/>
          <Route path="/struktur" element={ <Struktur /> }/>
          <Route path="/ikpstv" element={ <Ikpstv /> }/>
          <Route path="/login" element={ <Login /> }/>
          <Route path="/daftar" element={ <Daftar /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;