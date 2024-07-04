import { useEffect, useState } from "react";

export const ProgramStudi = () => {
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
          id: "dropdownIconStudi",
          idDrop: "dropdownMenuPropil",
        })
      }
      onMouseLeave={() =>
        heandleDropdownMouseLeave({
          id: "dropdownIconStudi",
          idDrop: "dropdownMenuPropil",
        })
      }
      onClick={() =>
        heandledropOnClick({
          idIcon: "dropdownIconStudi",
          idDropdown: "dropdownMenuPropil",
        })
      }
      className={` md:h-full md:flex md:items-center relative px-5 `}
    >
      <div className="flex items-center justify-between pr-2 md:gap-2 md:pr-0">
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
  );
};
