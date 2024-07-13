/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import JudulInformasi from "./judulInformasi";
import { useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Berita = ({ item }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://sthg.labtekcmr.com/api/cms/getBerita"
        );
        setData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <section className="px-5 md:px-16">
      <JudulInformasi title={"BERITA UNIVERSITAS"} />
      <div className="">
        <div id="berita" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(item ? data.slice(0, 6) : data).map((item) => (
            <div
              // eslint-disable-next-line react/prop-types
              key={item.id_berita}
              className="max-w-sm h-60 relative overflow-hidden group rounded-md"
            >
              <div>
                <img
                  src={item.foto}
                  alt=""
                  className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-300 "
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-center px-4 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  {item.judul}
                </h5>
                <p className="font-normal text-gray-300">{item.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center p-8">
          <NavLink to={"/berita"}>
            <button className="bg-red-700 p-4 rounded-lg px-5 text-white font-semibold">
              Berita Lainnya
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Berita;
