import Navbar from "../../Navbar";
import Footer from "../../../Item/footer";
import "flowbite";
import { useEffect, useState } from "react";
import axios from "axios";

const Pasilitas = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sthg.labtekcmr.com/api/cms/getFasilitas"
        );
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="font-sans">
      <Navbar />
      <section className="relative  mt-[80px] bg-[url(/gambar/aula.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gray-900/75  ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 md:flex lg:h-screen md:items-center md:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-bold uppercase text-white sm:text-3xl border-l-4 border-red-700 bg-yellow-400 p-2 px-4">
              Fasilitas
            </h1>
          </div>
        </div>
      </section>
      <nav
        className="flex py-6 px-6 md:px-16  md:border-b shadow-md md:shadow-none"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Profile
              </span>
            </div>
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Fasilitas
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="mx-6 my-10 md:mx-10">
        {data.map((item, key) => (
          <section key={key} className="border w-full">
            <div className="mx-auto  px-4 py-16 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                <div className="relative z-10 lg:py-16">
                  <div className="relative h-64 sm:h-80 lg:h-full">
                    <img
                      alt=""
                      src={item.foto}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="relative flex items-center bg-gray-100">
                  <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                  <div className="p-8 sm:p-16 lg:p-24">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                      {item.nama}
                    </h2>

                    <p className="mt-4 text-gray-600">{item.deskripsi}</p>

                    <a
                      href="#"
                      className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    >
                      Get in Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Pasilitas;
