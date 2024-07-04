import { useEffect, useState } from "react";

const Profile = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const heandledropOnClick = ({ idIcon, idDropdown, state }) => {
    const dropdownIcon = document.getElementById(idIcon);
    state((prevState) => !prevState);
    const dropdownMenu = document.getElementById(idDropdown);
    dropdownMenu.classList.toggle("hidden");
    dropdownIcon.classList.toggle("rotate-180");
  };

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
    <li
      id="liDropdown"
      onMouseEnter={() =>
        heandleDropdownMouseEnter({
          id: "dropdownIcon",
          idDrop: "dropdownMenu",
        })
      }
      onMouseLeave={() =>
        heandleDropdownMouseLeave({
          id: "dropdownIcon",
          idDrop: "dropdownMenu",
        })
      }
      onClick={() =>
        heandledropOnClick({
          idIcon: "dropdownIcon",
          idDropdown: "dropdownMenu",
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
  );
};

export default Profile;
