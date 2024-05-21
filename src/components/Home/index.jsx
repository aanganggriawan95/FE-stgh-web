import Navbar from "../Navbar";
import Carousel from "../../Item/Carousel";
import Sambutan_Rektor from "../../Item/SambutanRektor";
import CaroselBagian2 from "../../Item/caroselBagian2";
import PengumumanInformasi from "../../Item/pengumuman_infoemasi";
import Berita from "../../Item/Berita";
import KegiatanUniv from "../../Item/kegiatanUniv";
import Medsos from "../../Item/medsos";
import Kerjasama from "../../Item/kerjasama";
import Footer from "../../Item/footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Sambutan_Rektor />
      <CaroselBagian2 />
      <PengumumanInformasi />
      <Berita />
      <KegiatanUniv />
      <Medsos />
      <Kerjasama />
      <Footer />
    </>
  );
};

export default Home;
