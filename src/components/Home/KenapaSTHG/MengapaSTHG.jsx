import axios from "axios";
import { useEffect, useState } from "react";

const MengapaSTHG = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sthg.labtekcmr.com/api/cms/getKenapaSTHG"
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
    <>
      <section>
        <div className="w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-start lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl text-start font-bold sm:text-4xl">
                Kenapa Memilih STHG ?
              </h2>

              <p className="mt-4 text-gray-600 text-justify">
                Dengan masih memegang semangat serupa itu, STHG Tasikmalaya kini
                berusaha untuk melayani masyarakat Tasikmalaya dengan lebih baik
                dengan cara mendidik para generasi muda maupun memberi
                pencerahan kepada khalayak masyarakat yang lebih luas untuk
                memahami hak dan kewajibannya sebagai warga negara Indonesia.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Daftar Sekrang
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {data.map((item, key) => (
                <a
                  key={key}
                  className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="#"
                >
                  <span className="inline-block rounded-lg bg-gray-50 p-3">
                    <img src={item.foto_or_logo} alt="" />
                  </span>

                  <h2 className="mt-2 font-bold">{item.judul}</h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MengapaSTHG;
