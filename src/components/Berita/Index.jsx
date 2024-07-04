import Navbar from "../Navbar";
import Footer from "../../Item/footer";
import Berita from "../../Item/Berita";

const BeritaPage = () => {
  return (
    <>
      <Navbar />
      <Berita item={false} />
      <Footer />
    </>
  );
};

export default BeritaPage;
