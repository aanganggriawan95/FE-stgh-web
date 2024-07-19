import Navbar from "../../Navbar";
import Footer from "../../../Item/footer";
import Jumbotron from "../../../Item/jumbotron";
import JumbotronKaprodi from "./JumbotronKaprodi";
import Prospek from "./Prospek";
import Kegiatan from "./KegiatanProdi";

// eslint-disable-next-line react/prop-types
export const Layaout = ({ title }) => {
  return (
    <div>
      <Navbar />
      <Jumbotron judul={title} img={"/gambar/hukum.jpeg"} />

      <div>
        <div className="px-6 md:px-10">
          <h1 className="text-3xl font-bold text-center py-8">
            Tujuan Pendidikan
          </h1>
          <p className="text-justify text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            distinctio voluptate et iste. Eos molestiae voluptate quae nobis nam
            repellendus, perferendis aperiam eaque non praesentium ab pariatur
            saepe nisi sequi accusamus. Dolore provident repellat tempora
            consequatur veniam cupiditate nemo deleniti quibusdam iure et,
            exercitationem sequi in totam odio minus cum dicta repudiandae atque
            fugiat inventore aperiam aspernatur iusto maxime ea? Maxime tenetur
            repellat est amet at ipsum quidem, dolorum minima aut officiis
            similique vitae cumque. Rerum excepturi rem sequi quaerat eaque quia
            commodi debitis iure, perspiciatis repellendus est molestiae
            assumenda architecto. Ratione odio commodi voluptate magnam, labore
            vero blanditiis dolores. Excepturi corrupti consequuntur laudantium
            enim natus nobis temporibus exercitationem, consectetur, earum culpa
            dolorem itaque soluta, a accusamus debitis quae. Ex dolor, delectus
            molestiae quis deleniti molestias reiciendis voluptates incidunt
            deserunt fugit dolores. Enim labore nihil distinctio quidem dolorum
            vitae optio. Laborum voluptatem delectus a dicta doloribus qui
            obcaecati, in, doloremque enim tempore fugit omnis sint, fugiat
            provident excepturi quas ipsam sed unde eligendi porro asperiores.
            Dolore dolorem nihil dolores vitae officia! Ut nam reprehenderit
            possimus fuga neque, modi voluptatem fugit explicabo a tempora illo,
            vitae architecto quasi voluptates commodi ex praesentium eligendi
            consectetur distinctio ullam! Quaerat a consequuntur minus at.
          </p>
        </div>
      </div>

      <JumbotronKaprodi />
      <Prospek />
      <Kegiatan />
      <Footer />
    </div>
  );
};

export default Layaout;
