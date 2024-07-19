import { useEffect, useState } from "react";
import JudulInformasi from "./judulInformasi";
import axios from "axios";

const Kerjasama = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sthg.labtekcmr.com/api/cms/getKerjasamaSTHG"
        );
        setData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Gagal mengambil detail kerjasama:", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className=" bg-gray-100 px-5 md:px-10 min-h-screen">
      <JudulInformasi title={"KERJASAMA STHG"} />
      <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 gap-4 items-center justify-center pb-10 w-full">
        {data.map((company) => (
          <div
            key={company.id}
            className="flex justify-center items-center bg-white rounded-lg shadow p-4"
          >
            <img
              src={company.foto_or_logo}
              alt={company.alt}
              className="h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kerjasama;
