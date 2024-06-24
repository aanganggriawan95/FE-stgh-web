import "animate.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  const [blackSpot, setBlackSpot] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);
  const [openDropStudi, setOpenDropStudi] = useState(false);
  const [openDropTentang, setOpenDropTentang] = useState(false);
  const Click = () => {
    setIsOpen(!isOpen);
    const content = document.getElementById("blackspot");
    content.classList.toggle("hidden");
  };

  // const ClickDropDown = () => {
  //   const dropdownMenu = document.getElementById("dropdownMenu");
  //   dropdownMenu.classList.toggle("hidden");
  //   dropdownMenu.classList.toggle("animate__fadeInDown");
  // };
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = ({ id, state }) => {
    const dropdownIcon = document.getElementById(id);
    if (isLargeScreen) {
      state(true);
    }
    dropdownIcon.classList.add("md:rotate-180");
  };

  const handleMouseLeave = ({ id, state }) => {
    const dropdownIcon = document.getElementById(id);
    if (isLargeScreen) {
      state(false);
    }
    dropdownIcon.classList.remove("md:rotate-180");
  };

  const heandledropOnClick = ({ idIcon, idDropdown, state }) => {
    const dropdownIcon = document.getElementById(idIcon);
    state((prevState) => !prevState);
    const dropdownMenu = document.getElementById(idDropdown);
    dropdownMenu.classList.toggle("hidden");
    dropdownIcon.classList.toggle("rotate-180");
  };

  window.addEventListener("scroll", function () {
    const navbar1 = document.getElementById("navbar1");
    const navbar2 = document.getElementById("navbar2");

    if (window.scrollY > 50) {
      navbar1.classList.remove("h-14");
      navbar1.classList.add("h-10");
      navbar2.classList.add("h-14");
      navbar2.classList.remove("h-20");
      navbar2.classList.remove("h-20");
    } else {
      navbar1.classList.remove("h-10");
      navbar1.classList.add("h-14");
      navbar2.classList.add("h-20");
      navbar2.classList.remove("h-14");
    }
  });

  const heandleDropdownMouseEnter = ({ id, idDrop, state }) => {
    const downMenu = document.getElementById(idDrop);
    downMenu.classList.remove("top-[50%]", "opacity-0");
    downMenu.classList.add("top-[100%]");
    const dropdownIcon = document.getElementById(id);
    if (isLargeScreen) {
      state(true);
    }
    dropdownIcon.classList.add("md:rotate-180");
  };
  const heandleDropdownMouseLeave = ({ id, idDrop, state }) => {
    const downMenu = document.getElementById(idDrop);
    downMenu.classList.add("top-[0]", "opacity-0");
    downMenu.classList.remove("top-[100%]");
    const dropdownIcon = document.getElementById(id);
    if (isLargeScreen) {
      state(false);
    }
    dropdownIcon.classList.remove("md:rotate-180");
  };
  return (
    <nav className="top-0 font-sans dark:bg-gray-900 fixed w-full z-50 transition-transform animate__animated animate__fadeInDown">
      {/* Hide */}
      <div
        id="blackspot"
        className="w-full h-screen bg-black opacity-50 z-[1]  absolute hidden"
      ></div>
      <div
        id="navbar1"
        className=" hidden lg:flex w-full bg-slate-900 px-10 justify-between items-center h-14 transition-all duration-300 ease-in-out"
      >
        <div className="flex gap-6 py-3 text-sm">
          <span className="text-yellow-300 flex">
            <svg
              class="w-6 h-6 text-yellow-300 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
              />
            </svg>
            (022) 2021440
          </span>
          <span className="text-yellow-300">@ humas@unpas.ac.id</span>
          <ul className="flex justify-center gap-4 sm:justify-start md:gap-4">
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-yellow-300 transition hover:text-teal-700/75"
              >
                <span className="sr-only ">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-yellow-300 transition hover:text-teal-700/75"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-yellow-300 transition hover:text-teal-700/75"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="text-yellow-300 flex gap-4 text-sm">
            <li>
              <a href="">Arsip</a>
            </li>
            <li>
              <a href="">Mitra</a>
            </li>
            <li>
              <a href="">Kerjasama</a>
            </li>
            <li>
              <a href="">Alumni</a>
            </li>
            <li>
              <a href="">Berita</a>
            </li>
            <li>
              <a href="">Pengumuman</a>
            </li>
            <li>
              <a href="">Kemahasiswaan</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        id="navbar2"
        className="max-w-screen-xl h-20 flex flex-wrap items-center md:justify-between transition-all duration-300 ease-in-out justify-between mx-auto  bg-gradient-to-r from-slate-900 to-red-700 md:text-sm lg:px-10"
      >
        <div className=" flex items-center w-full md:flex md:w-auto justify-center gap-2">
          <img src="/public/gambar/logo_sthg.png" alt="" className="w-14" />
          <img src="/public/MBKM-logo.png" alt="" className="w-14" />
        </div>
        <button
          data-collapse-toggle="navbar-default"
          onClick={Click}
          type="button"
          className="inline-flex absolute items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          className={`bg-white opacity-20 start-0 z-50  w-[70%] top-0 h-screen absolute lg:relative  lg:bg-transparent lg:top-0  lg:h-full lg:block lg:w-auto transition-transform  animate__animated animate__fadeInDown ${
            isOpen ? "block animate__animated animate__fadeInLeft" : "hidden"
          }`}
          id="navbar-default"
        >
          {/* <div className="absolute w-full flex justify-end p-2 md:hidden">
            
          </div> */}
          <div className="flex justify-between py-4 items-center mx-2 md:hidden">
            <div className="flex items-center gap-2">
              <img src="/gambar/logo_sthg.png" alt="" className="h-12" />
              <h1 className="font-bold text-3xl text-red-700">STHG </h1>
            </div>
            <svg
              onClick={Click}
              className="w-6 h-6 text-red-700 top-0 right-0  dark:text-white rounded-full border-2 border-red-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
          </div>
          <ul
            id="navbar"
            className="font-medium  md:h-full flex flex-col gap-6 md:gap-0  md:items-center md:p-0 mt-8 rounded-lg  md:flex-row md:flex-wrap  rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li className="flex items-center px-5 ">
              <div className="flex items-center px-3 md:px-0 gap-2">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white md:hidden "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                  />
                </svg>

                <a
                  href="/"
                  className="block text-md py-2 border  text-black rounded md:text-white  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  HOME
                </a>
              </div>
            </li>
            <li
              id="liDropdown"
              onMouseEnter={() =>
                heandleDropdownMouseEnter({
                  id: "dropdownIcon",
                  idDrop: "dropdownMenu",
                  state: setOpenDrop,
                })
              }
              onMouseLeave={() =>
                heandleDropdownMouseLeave({
                  id: "dropdownIcon",
                  idDrop: "dropdownMenu",
                  state: setOpenDrop,
                })
              }
              onClick={() =>
                heandledropOnClick({
                  idIcon: "dropdownIcon",
                  idDropdown: "dropdownMenu",
                  state: setOpenDrop,
                })
              }
              className={`px-5  md:h-full md:flex md:items-center relative`}
            >
              <div className="flex md:gap-2 items-center justify-between pr-2">
                <div className="flex w-full justify-between">
                  <div className="flex items-center mx-3 md:px-0">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white md:hidden"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"
                      />
                    </svg>
                    <a
                      id="dropdownButton"
                      data-dropdown-toggle="dropdown"
                      href="#"
                      className=" py-2 px-3 flex items-center h-full  text-black md:text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      PROFIL
                    </a>
                  </div>
                  <svg
                    id="dropdownIcon"
                    className="w-6 h-6 text-black md:text-white transition-all duration-200 ease-in-out"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 9-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div
                id="dropdownMenu"
                className={` rounded-sm hidden md:block  bg-white shadow-2xl md:absolute top-[50%] opacity-0  divide-y divide-gray-100 w-full md:w-56  dark:bg-gray-700 transition-all duration-300 ease-in-out`}
              >
                <ul
                  className=" text-sm mx-4 md:mx-0 text-gray-700 dark:text-gray-200 "
                  aria-labelledby="dropdownButton"
                >
                  <li>
                    <a
                      href="/profil/visi&misi"
                      className="block px-4 py-2 text-sm  dark:hover:bg-gray-600 hover:text-red-700"
                    >
                      VISI MISI
                    </a>
                  </li>
                  <li>
                    <a
                      href="/profil/sejarah"
                      className="block px-4 py-2 text-sm  dark:hover:bg-gray-600 hover:text-red-700"
                    >
                      TENTANG STHG
                    </a>
                  </li>
                  <li>
                    <a
                      href="/profil/pasilitas"
                      className="block px-4 py-2 text-sm  dark:hover:bg-gray-600 hover:text-red-700"
                    >
                      FASILITAS
                    </a>
                  </li>
                  <li>
                    <a
                      href="/profil/akreditasi"
                      className="block px-4 py-2 text-sm  dark:hover:bg-gray-600 hover:text-red-700"
                    >
                      AKREDITASI
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li
              id="liDropdown"
              onMouseEnter={() =>
                heandleDropdownMouseEnter({
                  id: "dropdownIconStudi",
                  idDrop: "dropdownMenuPropil",
                  state: setOpenDropStudi,
                })
              }
              onMouseLeave={() =>
                heandleDropdownMouseLeave({
                  id: "dropdownIconStudi",
                  idDrop: "dropdownMenuPropil",
                  state: setOpenDropStudi,
                })
              }
              onClick={() =>
                heandledropOnClick({
                  idIcon: "dropdownIconStudi",
                  idDropdown: "dropdownMenuPropil",
                  state: setOpenDropStudi,
                })
              }
              className={` md:h-full md:flex md:items-center relative px-5 `}
            >
              <div className="flex items-center justify-between pr-2 md:gap-2 md:pr-0">
                <div className="flex items-center mx-3 md:px-0">
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white md:hidden"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
                    />
                  </svg>
                  <a
                    id="dropdownButton"
                    data-dropdown-toggle="dropdown"
                    href="#"
                    className=" py-2 px-3 md:px-0 flex items-center h-full  text-black md:text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    PROGRAM STUDI
                  </a>
                </div>
                <svg
                  id="dropdownIconStudi"
                  className="w-6 h-6 text-black md:text-white transition-all duration-200 ease-in-out"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </div>
              <div
                id="dropdownMenuPropil"
                className={` rounded-sm hidden md:block  bg-white shadow-2xl md:absolute top-[50%] opacity-0  divide-y divide-gray-100 w-full md:w-56  dark:bg-gray-700 transition-all duration-300 ease-in-out`}
              >
                <ul
                  className=" text-sm mx-4 md:mx-0 text-gray-700 dark:text-gray-200 "
                  aria-labelledby="dropdownButton"
                >
                  <li>
                    <a
                      href="/studi/sarjana"
                      className="block px-4 py-2 text-sm  dark:hover:bg-gray-600 hover:text-red-700"
                    >
                      SARJANA HUKUM
                    </a>
                  </li>
                  <li>
                    <a
                      href="/studi/master"
                      className="block px-4 py-2 text-sm  dark:hover:bg-gray-600 hover:text-red-700"
                    >
                      MASTER HUKUM
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="px-5  md:h-full md:flex md:items-center relative">
              <div className="flex px-3 md:px-0 items-center">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white md:hidden"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.005 11.19V12l6.998 4.042L19 12v-.81M5 16.15v.81L11.997 21l6.998-4.042v-.81M12.003 3 5.005 7.042l6.998 4.042L19 7.042 12.003 3Z"
                  />
                </svg>
                <a
                  href="#"
                  className="block text-sm py-2 px-3 text-black md:text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  PMB
                </a>
              </div>
            </li>
            <li className="px-5  md:h-full md:flex md:items-center relative">
              <div className="flex px-3 md:px-0 items-center">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white md:hidden"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z"
                  />
                </svg>

                <a
                  href="#"
                  className="block text-sm py-2 px-3 text-black md:text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  AKADEMIK
                </a>
              </div>
            </li>

            <li className="px-5  md:h-full md:flex md:items-center relative">
              <div className="flex px-3 md:px-0 items-center">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white md:hidden"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.079 6.839a3 3 0 0 0-4.255.1M13 20h1.083A3.916 3.916 0 0 0 18 16.083V9A6 6 0 1 0 6 9v7m7 4v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z"
                  />
                </svg>
                <a
                  href="#"
                  className="block text-sm py-2 px-3 text-black md:text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  KONTAK
                </a>
              </div>
            </li>
            <li className="px-5  md:h-full md:flex md:items-center relative">
              <a
                href="#"
                className="block text-sm py-2 px-3 md:px-0 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
