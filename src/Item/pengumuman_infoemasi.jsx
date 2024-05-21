const PengumumanInformasi = () => {
  return (
    <section>
      <div>
        <div className="bg-yellow-300 w-full">
          <h1 className="text-3xl py-2 md:text-4xl font-bold text-white text-center md:py-16 ">
            Pengumuman & Informasi <br />
            <span>-------------------</span>
          </h1>
          <div className="pb-4 px-10 md:pb-16 cursor-pointer">
            <img
              src="/public/gambar/banner_PMB.jpg"
              alt=""
              className=" border-4 border-white "
            />
          </div>
        </div>
      </div>
      <div className="w-full border px-5 md:px-10 pb-10">
        <div className="py-8">
          <h1 className="text-3xl font-semibold">Mengapa Memilih STHG?</h1>
        </div>
        <div className="flex flex-col gap-4 md:gap-0  lg:flex-row lg:gap-4 ">
          <div className="w-full md:w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-3 gap-3">
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
          </div>
          <div className="w-full  lg:w-[30%] md:hidden lg:block lg:h-full">
            <img
              src="/public/gambar/unpas_pmb_widget.jpg"
              alt=""
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PengumumanInformasi;
