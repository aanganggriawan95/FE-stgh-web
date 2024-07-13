const SideBar = () => {
  return (
    <div>
      {/* // <!-- drawer init and show --> */}
      <div className="text-center flex border rounded-md">
        <button
          className="text-white"
          type="button"
          data-drawer-target="drawer-navigation"
          data-drawer-show="drawer-navigation"
          aria-controls="drawer-navigation"
        >
          <svg
            className="w-8 h-8 text-white dark:text-white"
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
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
      </div>

      {/* // <!-- drawer component --> */}
      <div
        id="drawer-navigation"
        className="fixed top-0 left-0 z-40 w-64 md:w-[40%] h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-gradient-to-r from-slate-950 to-red-700 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-white border-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only text-white">Close menu</span>
        </button>
        <div className="flex items-center justify-start gap-2 py-4">
          <img src="/gambar/newLogo.png" alt="" className="w-[30%]" />
          <h1 className="text-white text-3xl font-bold">STHG</h1>
        </div>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium flex flex-col gap-4">
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-white rounded-lg "
              >
                <svg
                  className="w-5 h-5 text-white transition duration-75 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Home</span>
              </a>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group "
                aria-controls="dropdown-example1"
                data-collapse-toggle="dropdown-example1"
              >
                <svg
                  className="w-6 h-6 text-white dark:text-white"
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
                    d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"
                  />
                </svg>

                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Profile
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul id="dropdown-example1" className="hidden py-2 space-y-2">
                <li>
                  <a
                    href="/profil/visi&misi"
                    className="flex items-center w-full p-2 text-white transition duration-75 pl-[43px]"
                  >
                    Vidi & Misi
                  </a>
                </li>
                <li>
                  <a
                    href="/profil/fasilitas"
                    className="flex items-center w-full p-2 text-white transition duration-75 pl-[43px]"
                  >
                    Tentang STHG
                  </a>
                </li>
                <li>
                  <a
                    href="/profil/sejarah"
                    className="flex items-center w-full p-2 text-white transition duration-75 pl-[43px]"
                  >
                    Fasilitas
                  </a>
                </li>
                <li>
                  <a
                    href="/profil/akreditasi"
                    className="flex items-center w-full p-2 text-white transition duration-75 pl-[43px]"
                  >
                    Akreditasi
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-whiterounded-lg text-white"
              >
                <svg
                  className="w-6 h-6 text-white"
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
                    d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-5-4v4h4V3h-4Z"
                  />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">PMB</span>
              </a>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group "
                aria-controls="dropdown-example2"
                data-collapse-toggle="dropdown-example2"
              >
                <svg
                  className="w-6 h-6 text-white dark:text-white"
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
                    d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
                  />
                </svg>

                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Program Studi
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul id="dropdown-example2" className="hidden py-2 space-y-2">
                <li>
                  <a
                    href="/studi/sarjana"
                    className="flex items-center w-full p-2 text-white transition duration-75 pl-[43px]"
                  >
                    Sarjana Hukum
                  </a>
                </li>
                <li>
                  <a
                    href="/studi/master"
                    className="flex items-center w-full p-2 text-white transition duration-75 pl-[43px]"
                  >
                    Master Hukum
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group "
                aria-controls="dropdown-example4"
                data-collapse-toggle="dropdown-example4"
              >
                <svg
                  className="w-6 h-6 text-white dark:text-white"
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
                    d="M5.005 11.19V12l6.998 4.042L19 12v-.81M5 16.15v.81L11.997 21l6.998-4.042v-.81M12.003 3 5.005 7.042l6.998 4.042L19 7.042 12.003 3Z"
                  />
                </svg>

                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Akademik
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul id="dropdown-example4" className="hidden py-2 space-y-2">
                <li>
                  <a
                    href="https://pustaka.sthg.ac.id/"
                    className="flex items-center w-full p-2 text-white transition duration-75 pl-[43px]"
                  >
                    Perpustakaan
                  </a>
                </li>
                <li>
                  <a
                    href="https://siakadbjbs.sthg.ac.id/"
                    className="flex items-center w-full p-2 text-white transition duration-75 pl-[43px]"
                  >
                    Siakad-BJBS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-white transition duration-75 pl-[43px]"
                  >
                    Tatacara Pembayaran
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-white transition duration-75 pl-[43px]"
                  >
                    Repository STHG
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="/kontak"
                className="flex items-center p-2 text-white rounded-lg "
              >
                <svg
                  className="w-6 h-6 text-white dark:text-white"
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
                    d="M7 6H5m2 3H5m2 3H5m2 3H5m2 3H5m11-1a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2M7 3h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                  />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Kontak</span>
              </a>
            </li>
            <li>
              <a
                href="https://jurnal.sthg.ac.id/index.php/jurnal/index"
                className="flex items-center p-2 text-white rounded-lg"
              >
                <svg
                  className="w-6 h-6 text-white dark:text-white"
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
                    d="M12 11H4m15.5 5a.5.5 0 0 0 .5-.5V8a1 1 0 0 0-1-1h-3.75a1 1 0 0 1-.829-.44l-1.436-2.12a1 1 0 0 0-.828-.44H8a1 1 0 0 0-1 1M4 9v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-3.75a1 1 0 0 1-.829-.44L9.985 8.44A1 1 0 0 0 9.157 8H5a1 1 0 0 0-1 1Z"
                  />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">E-jurnal</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
