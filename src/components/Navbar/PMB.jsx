const PMB = () => {
  return (
    <li className="px-5  md:h-full md:flex md:items-center relative">
      <div className="flex px-3 md:px-0 items-center">
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
  );
};

export default PMB;
