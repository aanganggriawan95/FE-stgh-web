const Home = () => {
  return (
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
  );
};

export default Home;
