import Navbar from "../Navbar";
import Carousel from "../../Item/Carousel";
import Sambutan_Rektor from "../../Item/SambutanRektor";
import CaroselBagian2 from "../../Item/caroselBagian2";
import PengumumanInformasi from "../../Item/pengumuman_infoemasi";
const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Sambutan_Rektor />
      <CaroselBagian2 />
      <PengumumanInformasi />
    </>
  );
};

export default Home;
