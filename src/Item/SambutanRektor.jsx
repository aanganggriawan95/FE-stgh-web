import { useEffect, useState } from "react";
import JudulInformasi from "./judulInformasi";
import axios from "axios";

const Sambutan_Rektor = () => {
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sthg.labtekcmr.com/api/cms/getSambutan"
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Gagal mengambil detail sambutan:", error.message);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  data.map((item, index) => {
    console.log("Foto Sambutan :", item.foto);
    console.log("Kata kata Sambutan :", item.sambutan);
    console.log("Judul Sambutan :", item.judul);
  });

  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <JudulInformasi title={item.judul} />
          <div className="bg-slate-900 lg:flex items-center justify-center gap-4 overflow-hidden w-full">
            <div className="w-full">
              <img
                className="w-full overflow-hidden"
                src={item.foto}
                alt="Gambar Rektor"
              />
            </div>

            <article className="w-full flex flex-col gap-4 justify-center text-white md:py-8">
              <p className="py-10 text-justify md:pb-0 px-8 text-xl">
                {item.sambutan}
              </p>
            </article>
          </div>
        </div>
      ))}
    </>
  );
};

export default Sambutan_Rektor;
