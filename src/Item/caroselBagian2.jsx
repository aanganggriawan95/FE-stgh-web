import "flowbite";
import "animate.css";
import { useState, useEffect } from "react";

import { Carousel } from "primereact/carousel";

import { StafService } from "../Servis/ProductService";

export default function CircularDemo() {
  const [staf, setStaf] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    StafService.getStafSmall()
      .then((data) => setStaf(data))
      .catch((error) => {
        console.error("Error fetching staff data:", error);
        // Anda bisa menambahkan logika untuk menampilkan pesan kesalahan kepada pengguna
      });
  }, []);

  const productTemplate = (staf) => {
    return (
      <div className="border-1 surface-border h-screen text-center py-10 px-3  w-auto  flex flex-col justify-center md:w-full md:px-0 md:h-[500px] md:flex-row  md:gap-4 md:items-center ">
        <div className=" h-1/2 flex items-center justify-center  rounded-lg  md:w-1/2 md:h-full">
          <img
            src={staf.foto} // Menggunakan URL gambar dari data staf
            alt={staf.foto}
            className="shadow-2 shadow-md border-4 border-slate-400 rounded-full h-full w-full object-cover md:h-[90%] "
          />
        </div>
        <div className="h-1/2 flex items-center justify-center flex-col gap-4 md:gap-2 md:w-1/2 ">
          <h1 className="mb-1 text-3xl md:text-4xl font-bold">{staf.nama}</h1>
          <h1 className="mt-0 mb-3 text-xl md:text-2xl font-bold">
            {staf.jabatan}
          </h1>
          <h1 className="mt-0 mb-3 text-xl md:text-2xl font-semibold">
            {staf.deskripsi_jabatan}
          </h1>
        </div>
      </div>
    );
  };

  const customPrevButton = () => (
    <button className="bg-sky-600 hover:bg-blue-700 text-white font-bold py-8 px-4 rounded-full">
      <svg
        className="w-6 h-6 text-gray-800 dark:text-white"
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
          d="m15 19-7-7 7-7"
        />
      </svg>
    </button>
  );

  const customNextButton = () => (
    <button className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      <svg
        className="w-6 h-6 text-gray-800 dark:text-white"
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
          d="m9 5 7 7-7 7"
        />
      </svg>
    </button>
  );

  return (
    <div className="card">
      <Carousel
        value={staf}
        numVisible={1}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={3000}
        itemTemplate={productTemplate}
        prevIcon={customPrevButton()}
        nextIcon={customNextButton()}
      />
    </div>
  );
}
