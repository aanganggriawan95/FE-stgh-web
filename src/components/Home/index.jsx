import Navbar from "../Navbar";
import Carousel from "../../Item/Carousel";
import Sambutan_Rektor from "../../Item/SambutanRektor";
import CircularDemo from "../../Item/caroselBagian2";
import PengumumanInformasi from "../../Item/pengumuman_infoemasi";
import Berita from "../../Item/Berita";
import KegiatanUniv from "../../Item/kegiatanUniv";
import Medsos from "../../Item/medsos";
import Kerjasama from "../../Item/kerjasama";
import Footer from "../../Item/footer";
const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Carousel />
      <Sambutan_Rektor />
      <div className="bg-slate-400">
        <CircularDemo />
      </div>
      <PengumumanInformasi />
      <Berita item={true} />
      <div className="bg-slate-100">
        <KegiatanUniv />
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
