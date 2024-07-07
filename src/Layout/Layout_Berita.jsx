import Navbar from "../components/Navbar";
import Footer from "../Item/footer";

const LayoutBerita = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="h-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutBerita;
