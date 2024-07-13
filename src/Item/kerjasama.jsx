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
    <div className="container mx-auto p-8 bg-gray-100">
      <JudulInformasi title={"KERJASAMA STHG"} />
      <div className="flex flex-wrap gap-8 items-center justify-center">
        {data.map((company) => (
          <div key={company.id} className="flex justify-center items-center">
            <img
              src={company.foto_or_logo}
              alt={company.alt}
              className="h-24"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kerjasama;
