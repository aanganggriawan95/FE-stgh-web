import Navbar from "../Navbar";
import Carousel from "../../Item/Carousel";

import Medsos from "../../Item/medsos";
import Kerjasama from "../../Item/kerjasama";
import Footer from "../../Item/footer";
import MengapaSTHG from "./KenapaSTHG/MengapaSTHG";
import { CaroselStaf } from "./Staf/Carosel";
import Smabutan from "./Sambutan/Sambutan";
import { Pengmuman } from "./Pengumuman/Pengumuman";
import { BeritaSTHG } from "./Berita/Berita";
import { KegiatanSTHG } from "./Kegiatan/Kegiatan";

// import { CarouselDefault } from "./Carosel";
const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Carousel />
      <Smabutan />
      <div className="bg-custom-image bg-cover bg-center md:h-[600px] flex items-center py-10">
        <CaroselStaf />
      </div>

      <Pengmuman />

      <MengapaSTHG />
      <div className="px-4 md:px-10 bg-[#f3f4f6] flex justify-center items-center pb-10">
        <BeritaSTHG />
      </div>
      <div className="px-4 md:px-10 bg-[#f3f4f6] flex justify-center items-center pb-10">
        <KegiatanSTHG />
      </div>
      <Medsos />
      <div className="bg-slate-100">
        <Kerjasama />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
