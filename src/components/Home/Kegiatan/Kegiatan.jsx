import JudulInformasi from "../../../Item/judulInformasi";
import { useEffect, useState } from "react";
import axios from "axios";

export function KegiatanSTHG() {
  const [kegiatan, setKegiatan] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sthg.labtekcmr.com/api/cms/getKegiatan"
        );
        setKegiatan(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(kegiatan);
  return (
    <div className="w-full ">
      <JudulInformasi title={"Kegiatan STHG"} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {kegiatan.map((kegiatan, key) => (
          <a key={key} href="#" className="group relative block bg-black">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Kegiatan
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                {kegiatan.judul}
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    {kegiatan.deskripsi_kegiatan}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
