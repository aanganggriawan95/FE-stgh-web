import Navbar from "../../Navbar";
import Footer from "../../../Item/footer";
import "flowbite";
import Jumbotron from "../../../Item/jumbotron";
import { BreadCrumb } from "./BreadCrumb";
const data = [
  {
    id: 1,
    title: "Fasilitas Ruang Kelas",
    img: "/gambar/gedung.jpg",
    deskripsi: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
    atque ullam error, sed ex facilis voluptate nam consequuntur
    dolorem eos suscipit consectetur possimus dolor dicta laborum
    iure velit, corrupti minima? Atque quis facere, doloribus
    accusantium dignissimos aliquid tempora rerum neque laudantium
    molestias quod quo minima aperiam, amet assumenda? Ad vitae
    porro ut, sequi nemo nisi maxime aut, provident architecto
    quaerat accusantium expedita facilis voluptatum qui adipisci
    eligendi quae corrupti repellendus libero cum consequuntur,
    consectetur veritatis sit. Odit id repudiandae adipisci mollitia
    eligendi fuga, voluptatum soluta dolores, maxime sunt tempore
    ipsam, esse beatae expedita aperiam cum distinctio enim debitis
    libero saepe quo incidunt nobis nesciunt! Veritatis ex maxime
    voluptatem pariatur! Corporis ipsam vitae tenetur cupiditate
    reprehenderit sapiente eligendi beatae nostrum odit.`,
  },
  {
    id: 2,
    title: "Fasilitas Ruang Aula",
    img: "/gambar/aula.jpg",
    deskripsi: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
    atque ullam error, sed ex facilis voluptate nam consequuntur
    dolorem eos suscipit consectetur possimus dolor dicta laborum
    iure velit, corrupti minima? Atque quis facere, doloribus
    accusantium dignissimos aliquid tempora rerum neque laudantium
    molestias quod quo minima aperiam, amet assumenda? Ad vitae
    porro ut, sequi nemo nisi maxime aut, provident architecto
    quaerat accusantium expedita facilis voluptatum qui adipisci
    eligendi quae corrupti repellendus libero cum consequuntur,
    consectetur veritatis sit. Odit id repudiandae adipisci mollitia
    eligendi fuga, voluptatum soluta dolores, maxime sunt tempore
    ipsam, esse beatae expedita aperiam cum distinctio enim debitis
    libero saepe quo incidunt nobis nesciunt! Veritatis ex maxime
    voluptatem pariatur! Corporis ipsam vitae tenetur cupiditate
    reprehenderit sapiente eligendi beatae nostrum odit.`,
  },
];
const Pasilitas = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Jumbotron judul={"FASILITAS"} />
      <div>
        <BreadCrumb />
        <div className="mt-10 px-6 md:px-10">
          <h1 className="font-semibold text-[40px] text-black">Fasilitas</h1>

          <div className="w-[20%] bg-gray-200 rounded-full h-[4px] dark:bg-gray-700">
            <div className="bg-red-700 h-[4px] rounded-full w-[100%]"></div>
          </div>
          {/* Fasilitas 1 */}
          {data.map((item) => (
            <div key={item.id} className="md:flex md:gap-10 md:mb-6 md:mt-6">
              <img src={item.img} alt="" className="py-10 md:py-3 md:w-[30%]" />
              <div className="">
                <h1 className="text-[30px] text-black">{item.title}</h1>
                <div className="w-[20%] bg-gray-200 rounded-full h-[4px] dark:bg-gray-700">
                  <div className="bg-red-700 h-[4px] rounded-full w-[100%]"></div>
                </div>
                <div>
                  <p className="text-justify">{item.deskripsi}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pasilitas;
