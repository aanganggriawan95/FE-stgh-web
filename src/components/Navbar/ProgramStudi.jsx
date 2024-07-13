export const ProgramStudi = () => {
  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="w-full uppercase ">
        Program studi
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content  menu bg-base-100 rounded-md z-[1] w-52 p-2 shadow"
      >
        <li>
          <a href="/studi/sarjana" className="text-black">
            Sarjana Hukum
          </a>
        </li>
        <li>
          <a href="/studi/master" className="text-black">
            Master Hukum
          </a>
        </li>
      </ul>
    </div>
  );
};
