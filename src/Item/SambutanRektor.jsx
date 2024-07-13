import { useEffect, useState } from "react";
import JudulInformasi from "./judulInformasi";
import axios from "axios";

const Sambutan_Rektor = () => {
  const [data, setData] = useState([]);
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

  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <JudulInformasi title={item.judul} />
          <div className="bg-slate-900 h-screen flex flex-col md:flex-row md:h-[500px] border lg:flex items-center justify-center overflow-hidden w-full">
            <div className="w-full min-h-[50%] md:h-full md:w-full">
              <img
                className="w-full h-full overflow-hidden object-cover"
                src={item.foto}
                alt="Gambar Rektor"
              />
            </div>

            <article className="w-full min-h-[50%] flex flex-col gap-4 justify-center text-white md:py-8">
              <p className="py-10 text-justify px-6 text-md">{item.sambutan}</p>
            </article>
          </div>
        </div>
      ))}
    </>
  );
};

export default Sambutan_Rektor;
