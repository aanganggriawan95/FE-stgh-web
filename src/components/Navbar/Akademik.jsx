const Akademik = () => {
  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className=" m-1 uppercase">
        Akademik
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-md z-[1] w-52 p-2 shadow"
      >
        <li>
          <a href="https://pustaka.sthg.ac.id/" className="text-black">
            Perpustakaan
          </a>
        </li>
        <li>
          <a href="https://siakadbjbs.sthg.ac.id/" className="text-black">
            Siakad
          </a>
        </li>
        <li>
          <a href="" className="text-black">
            Peraktik Peradilan Lapangan
          </a>
        </li>
        <li>
          <a href="" className="text-black">
            Tata Cara Pembayaran
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Akademik;
