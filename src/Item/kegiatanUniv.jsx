import KegiatanAPI from "../Servis/Kegiatan";
import { useEffect, useState } from "react";
import JudulInformasi from "./judulInformasi";
import { useNavigate } from "react-router-dom";

const KegiatanUniv = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    KegiatanAPI.getKegiatanSmall().then((data) => setData(data));
  }, []);

  console.log(data);

  const handleClick = (id) => {
    navigate(`/detailKegiatan/${id}`);
  };

  return (
    <section className="px-5 md:px-16">
      <JudulInformasi title={"KEGIATAN UNIVERSITAS"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
        {data.slice(0, 6).map((item, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg w-full h-48 object-cover"
                src={item.foto}
                alt={item.judul}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.judul}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <button onClick={() => handleClick(item.id_kegiatan)}>
                <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center p-8">
        <button className="bg-gradient-to-r from-slate-950 to-red-700 p-2 rounded-lg px-5 text-white font-text-base">
          Berita Lainnya
        </button>
      </div>
    </section>
  );
};

export default KegiatanUniv;
