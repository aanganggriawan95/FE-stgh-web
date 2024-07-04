/* eslint-disable react/prop-types */
const data = [
  {
    id: 1,
    judul: "Noteworthy technology acquisitions 2021",
    deskripsi:
      "The release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    judul: "Noteworthy technology acquisitions 2021",
    deskripsi:
      "The release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    judul: "Noteworthy technology acquisitions 2021",
    deskripsi:
      "The release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 4,
    judul: "Noteworthy technology acquisitions 2021",
    deskripsi:
      "The release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 5,
    judul: "Noteworthy technology acquisitions 2021",
    deskripsi:
      "The release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 6,
    judul: "Noteworthy technology acquisitions 2021",
    deskripsi:
      "The release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 7,
    judul: "Noteworthy technology acquisitions 2021",
    deskripsi:
      "The release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 8,
    judul: "Noteworthy technology acquisitions 2021",
    deskripsi:
      "The release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 9,
    judul: "Noteworthy technology acquisitions 2021",
    deskripsi:
      "The release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 10,
    judul: "Noteworthy technology acquisitions 2021",
    deskripsi:
      "The release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];
import { NavLink } from "react-router-dom";
import JudulInformasi from "./judulInformasi";

// eslint-disable-next-line react/prop-types
const Berita = ({ item }) => {
  return (
    <section className="px-5 md:px-10">
      <JudulInformasi title={"BERITA UNIVERSITAS"} />
      <div className="">
        <div id="berita" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(item ? data.slice(0, 6) : data).map((item) => (
            <div
              // eslint-disable-next-line react/prop-types
              key={item.id}
              className="max-w-sm h-60 relative overflow-hidden group"
            >
              <div>
                <img
                  src="https://images.unsplash.com/photo-1715606785663-3fa3a08aadec?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
