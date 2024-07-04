import { useEffect, useState } from "react";
import JudulInformasi from "./judulInformasi";
import axios from "axios";

const token = "1|Dp7nLbmhWg6H4uS8znZA9ZTYJMfLJs0ERmYPTf1Qad8cee42";

const Sambutan_Rektor = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/cms/getSambutan",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Gagal mengambil detail sambutan:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <JudulInformasi title={item.judul} />
          <div className="bg-[#474747] lg:flex items-center justify-center gap-4 overflow-hidden w-full">
            <div className="w-full">
              <img
                className="w-full overflow-hidden"
                src={`${item.foto}`}
                alt="Gambar Rektor"
              />
            </div>

            <article className="w-full flex flex-col gap-4 justify-center text-white md:py-8">
              <p className="pb-10 md:pb-0 px-8 text-xl">{item.sambutan}</p>
            </article>
          </div>
        </div>
      ))}
    </>
  );
};

export default Sambutan_Rektor;
