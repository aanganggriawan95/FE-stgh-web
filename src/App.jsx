import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Sejarah from "./components/Profil/Sejarah";
import Pasilitas from "./components/Profil/Pasilitas";
import Akreditasi from "./components/Profil/Akreditasi";
import AkreditasiPT from "./Item/akreditasi";
import Sarjana from "./components/ProgramStudi/Sarjana";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil/sejarah" element={<Sejarah />} />
          <Route path="/profil/pasilitas" element={<Pasilitas />} />
          <Route path="/profil/akreditasi" element={<Akreditasi />} />
          <Route path="/profil/akreditasiPT" element={<AkreditasiPT />} />
          <Route path="/studi/sarjana" element={<Sarjana />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
