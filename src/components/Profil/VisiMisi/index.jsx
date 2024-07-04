import "flowbite";
import Navbar from "../../Navbar";
import Jumbotron from "../../../Item/jumbotron";
import Footer from "../../../Item/footer";

export default function VisiMisi() {
  return (
    <div className="">
      <Navbar />
      <Jumbotron judul={"VISI DAN MISI"} />
      <div className="px-6 md:px-10 py-16">
        <div className="pb-10">
          <h1 className="text-3xl font-bold">Visi</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            dolorum facilis error facere doloribus ea modi non perferendis
            delectus dignissimos?
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Misi</h1>
          <ol>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod
              natus fugit ipsa reiciendis reprehenderit.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod
              natus fugit ipsa reiciendis reprehenderit.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod
              natus fugit ipsa reiciendis reprehenderit.
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
}
