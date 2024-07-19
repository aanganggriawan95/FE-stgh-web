import axios from "axios";
import { useEffect, useState } from "react";
import JudulInformasi from "../../../Item/judulInformasi";

const Sambutan = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sthg.labtekcmr.com/api/cms/getSambutan"
        );

        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      <JudulInformasi title={"Sambutan Ketua"} />
      {data.map((data, key) => (
        <section
          key={key}
          className="overflow-hidden bg-custom-image bg-cover bg-center flex flex-col md:flex-row md:items-center md:justify-center"
        >
          <div className="p-8 md:p-12  lg:px-16 lg:py-24 order-2 sm:order-1 md:w-1/2">
            <div className="mx-auto  max-w-xl text-center sm:text-left ">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                {data.judul}
              </h2>

              <p className=" text-gray-500 md:mt-4 md:block text-justify">
                {data.sambutan}
              </p>
            </div>
          </div>

          <img
            alt=""
            src={data.foto}
            className="h-full w-full md:w-1/2 sm:rounded-ss-[30px]  md:rounded-ss-[60px] order-1 sm:order-2"
          />
        </section>
      ))}
    </div>
  );
};

export default Sambutan;
