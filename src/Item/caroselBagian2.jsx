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
      <div className="border-1 surface-border m-2 text-center py-10 px-3 md:px-0 h-[500px] w-auto md:w-full flex flex-col justify-center md:flex-row ">
        <div className="mb-3 md:w-1/2 flex items-center justify-center  rounded-lg">
          <img
            src={staf.foto} // Menggunakan URL gambar dari data staf
            alt={staf.foto}
            className="shadow-2 rounded-full h-full w-[70%] object-cover"
          />
        </div>
        <div className="border md:w-1/2 flex items-center justify-center flex-col">
          <h1 className="mb-1 text-3xl md:text-5xl font-bold">{staf.nama}</h1>
          <h1 className="mt-0 mb-3 text-xl md:text-3xl font-bold">
            {staf.jabatan}
          </h1>
          <h1 className="mt-0 mb-3 text-xl md:text-3xl font-bold">
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
