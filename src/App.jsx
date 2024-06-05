import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Beranda from "./pages/Beranda";
import Struktur from "./pages/Struktur";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Beranda /> }/>
          <Route path="/struktur" element={ <Struktur /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
