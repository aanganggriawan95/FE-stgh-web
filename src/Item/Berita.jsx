const data = [
  {
    id: 1,
    judul: "Noteworthy technology acquisitions 2021",
    deskripsi:
      "The release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 1,
    judul: "Noteworthy technology acquisitions 2021",
    deskripsi:
      "The release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 1,
    judul: "Noteworthy technology acquisitions 2021",
    deskripsi:
      "The release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 1,
    judul: "Noteworthy technology acquisitions 2021",
    deskripsi:
      "The release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 1,
    judul: "Noteworthy technology acquisitions 2021",
    deskripsi:
      "The release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 1,
    judul: "Noteworthy technology acquisitions 2021",
    deskripsi:
      "The release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 1,
    judul: "Noteworthy technology acquisitions 2021",
    deskripsi:
      "The release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 1,
    judul: "Noteworthy technology acquisitions 2021",
    deskripsi:
      "The release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 1,
    judul: "Noteworthy technology acquisitions 2021",
    deskripsi:
      "The release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 1,
    judul: "Noteworthy technology acquisitions 2021",
    deskripsi:
      "The release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];
const Berita = () => {
  return (
    <section className="px-5 md:mx-10">
      <div className="flex justify-center">
        <h1 className="font-bold text-3xl md:text-4xl pt-16 text-center">
          Berita Universitas <br />
          <span>---------------</span>
        </h1>
      </div>
      <div className="w-full">
        <div id="berita" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.slice(0, 6).map((item, index) => (
            <div
              key={item.id}
              className="max-w-sm h-60 relative overflow-hidden group"
            >
              {/* <div className="absolute z-20 flex gap-4 p-2">
            <button className="bg-red-700 p-1 rounded-xl text-white flex items-center text-sm">
              Berita
            </button>
            <button className="bg-red-700 p-1 rounded-xl text-white text-sm">
              Kerjasama
            </button>
          </div> */}
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
          <button className="bg-red-700 p-4 rounded-lg px-5 text-white font-semibold">
            Berita Lainnya
          </button>
        </div>
      </div>
    </section>
  );
};

export default Berita;
