import Navbar from "../../Navbar";
import Footer from "../../../Item/footer";
import "flowbite";
import Jumbotron from "../../../Item/jumbotron";

import FieldsetContent from "./Fealsheed";
const Sejarah = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Jumbotron judul={"Tentang STHG"} />
      <div className="">
        <div className="flex justify-center py-2 flex-col">
          <nav
            className="flex  px-6 md:px-10 md:border-b shadow-lg md:shadow-none py-4"
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
                    Tentang
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <br />
          <FieldsetContent />

          <div className="flex flex-col items-center justify-center bg-gradient-to-r from-red-700 to-black text-white py-20 my-20">
            <div className="flex flex-col items-center px-4 justify-center gap-2">
              <h1 className="text-2xl lg:text-[30px]">Statistik STHG</h1>
              <p className="text-center font-bold">
                Sejak 1997, STT Cipasung telah berkarya di dunia pendidikan
                teknologi di Tasikmalaya
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center py-10">
              <div className=" flex flex-col text-center">
                <span className="text-[70px] font-semibold">2</span>
                <span>Program Studi</span>
                <span className="text-sm px-4">
                  Program Studi Teknik Industri dan Informatika
                </span>
              </div>
              <div className=" flex flex-col text-center">
                <span className="text-[70px] font-semibold">16</span>
                <span>Dosen Tetap</span>
                <span className="px-4 text-sm">
                  Dosen Tetap yang ber-homebase di STT Cipasung
                </span>
              </div>
              <div className=" flex flex-col text-center">
                <span className="text-[70px] font-semibold">535</span>
                <span>Mahasiswa</span>
                <span className="text-sm px-4">
                  Mahasiswa seluruh angkatan di STT Cipasung
                </span>
              </div>
              <div className=" flex flex-col text-center">
                <span className="text-[70px] font-semibold">486</span>
                <span>Alumni</span>
                <span className="text-sm px-4">
                  Lulusan STT Cipasung sejak berdiri tahun 1997 sampai 2018
                </span>
              </div>
            </div>
          </div>

          <ol className="relative border-s md:px-10 border-gray-200 dark:border-gray-700">
            <div className="w-full">
              <li className="mb-10 mx-4 border-l-2 py-8 px-4 hover:border-l-red-700 lg:ml-[50%]">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  February 2022
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Application UI code in Tailwind CSS
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Get access to over 20+ pages including a dashboard layout,
                  charts, kanban board, calendar, and pre-order E-commerce &
                  Marketing pages.
                </p>
              </li>
            </div>
            <li className="mb-10 mr-4 text-end mx-4 border-r-2 py-8 px-4 hover:border-r-red-700 lg:mr-[50%]">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                March 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Marketing UI design in Figma
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li className="ms-4 mb-10 mx-4 border-l-2 py-8 px-4 hover:border-l-red-700 lg:lg:ml-[50%]">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                April 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                E-Commerce UI code in Tailwind CSS
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sejarah;
