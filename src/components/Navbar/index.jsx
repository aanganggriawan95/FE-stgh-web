import "animate.css";
import { Dropdown } from "flowbite";
import { useEffect } from "react";
const Navbar = () => {
  const Click = () => {
    const nav = document.getElementById("navbar-default");
    nav.classList.toggle("hidden");
  };

  const ClickDropDown = () => {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.classList.toggle("hidden");
    dropdownMenu.classList.toggle("animate__fadeInDown");
  };
  const dropdownMenu = document.getElementById("dropdownMenu");

  return (
    <nav className="bg-gradient-to-r from-red-700 to-black py-1 border-gray-200 dark:bg-gray-900 fixed w-full z-50 transition-transform animate__animated animate__fadeInDown">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center gap-2">
          <img src="/public/gambar/logo_sthg.png" alt="" className="w-10" />
          <img src="/public/MBKM-logo.png" alt="" className="w-10" />
        </div>
        <button
          data-collapse-toggle="navbar-default"
          onClick={Click}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto transition-transform animate__animated animate__fadeInDown"
          id="navbar-default"
        >
          <ul
            id="navbar"
            className="font-medium flex flex-col md:p-0 mt-4   rounded-lg  md:flex-row md:flex-wrap md:space-x-4 lg:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li className="">
              <a
                href="#"
                className="block py-2 px-3 text-white  bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-blue-500 text-sm"
                aria-current="page"
              >
                HOME
              </a>
            </li>
            <li onMouseEnter={ClickDropDown} onMouseLeave={ClickDropDown}>
              <a
                onClick={ClickDropDown}
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                href="#"
                className="block text-sm py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                PROFIL
              </a>
              <div
                id="dropdownMenu"
                className="z-10 hidden md:bg-white md:absolute divide-y divide-gray-100 shadow w-full md:w-56 bg-transparent dark:bg-gray-700"
              >
                <ul
                  className=" text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gradient-to-r from-red-700 to-black  dark:hover:bg-gray-600 hover:text-white"
                    >
                      SEJARAH
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gradient-to-r from-red-700 to-black  dark:hover:bg-gray-600 hover:text-white"
                    >
                      FASILITAS
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gradient-to-r from-red-700 to-black  dark:hover:bg-gray-600 hover:text-white"
                    >
                      AKREDITASI KAMPUS
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gradient-to-r from-red-700 to-black  dark:hover:bg-gray-600 hover:text-white"
                    >
                      AKREDITASI SARJANA HUKUM
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gradient-to-r from-red-700 to-black  dark:hover:bg-gray-600 hover:text-white"
                    >
                      AKREDITASI MAGISTER HUKUM
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="block text-sm py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                PROGRAM STUDI
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-sm py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                PMB
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-sm py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                AKADEMIK
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-sm py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                TENTANG STHG
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-sm py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                KONTAK
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-sm py-2 px-3 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                E-JURNAL
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
