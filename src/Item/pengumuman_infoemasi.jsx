import { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { Pengumuman } from "../Servis/Pengumuman";
import JudulInformasi from "./judulInformasi";
import "flowbite";

export default function PengumumanInformasi() {
  const [info, setInfo] = useState([]);
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
    Pengumuman.getPengumuman()
      .then((data) => setInfo(data))
      .catch((error) => {
        console.error("Error fetching staff data:", error);
      });
  }, []);

  const productTemplate = (info) => {
    return (
      <div className="surface-border text-center h-[600px] relative ">
        <img
          src={info.foto}
          alt="Foto Pengumuman"
          className="shadow-2 absolute w-full z-[-1]"
        />
        <div className="flex items-center justify-center h-full w-full">
          <div className="z-10">
            <h4 className="mb-1 text-white">{info.judul}</h4>
            <h6 className="mt-0 mb-3 text-white">{info.link}</h6>
          </div>
        </div>
      </div>
    );
  };

  const customPrevButton = () => (
    <button className="bg-white hover:bg-blue-700 text-white font-bold py-8 px-4 rounded-full">
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
    <button className="bg-white hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
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
    <div className="card bg-yellow-300">
      <JudulInformasi title="Pengumuman Informasi" />
      <Carousel
        value={info}
        numScroll={1}
        numVisible={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
        // header={
        //   <div className="text-center mb-4 text-xl font-bold">{info.judul}</div>
        // }
        prevIcon={customPrevButton()}
        nextIcon={customNextButton()}
      />
    </div>
  );
}
