import Navbar from "../Navbar";
import Footer from "../../Item/footer";
import "flowbite";
import Jumbotron from "../../Item/jumbotron";
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
    <div>
      <Navbar />
      <Jumbotron judul={"Fasilitas"} />
      <div>
        <div className="">
          <nav
            className="flex  px-6 md:px-10 py-6  md:border-b shadow-lg md:shadow-none"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </a>
              </li>

              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                    Sejarah
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
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
