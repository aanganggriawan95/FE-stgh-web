import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Sejarah from "./components/Profil/SejarahPage/Index";
import Pasilitas from "./components/Profil/FasilitasPage/Index";
import Akreditasi from "./components/Profil/AkreditasiPage/Index";
import Sarjana from "./components/ProgramStudi/SarjanaPage/Index";
import Master from "./components/ProgramStudi/MasterPage/Index";
import VisiMisi from "./components/Profil/VisiMisi";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil/sejarah" element={<Sejarah />} />
          <Route path="/profil/pasilitas" element={<Pasilitas />} />
          <Route path="/profil/akreditasi" element={<Akreditasi />} />
          <Route path="/studi/sarjana" element={<Sarjana />} />
          <Route path="/studi/master" element={<Master />} />
          <Route path="/profil/visi&misi" element={<VisiMisi />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
