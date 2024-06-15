const data = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1715358214370-d6ac2c00aa18?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1715358214370-d6ac2c00aa18?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1715358214370-d6ac2c00aa18?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1715358214370-d6ac2c00aa18?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1715358214370-d6ac2c00aa18?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1715358214370-d6ac2c00aa18?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1715358214370-d6ac2c00aa18?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
import JudulInformasi from "./judulInformasi";
const KegiatanUniv = () => {
  return (
    <section className="px-5 md:px-10">
      <JudulInformasi title={"KEGIATAN UNIVERSITAS"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
        {data.slice(0, 6).map((item, index) => (
          <div key={item.id} className="h-60 relative overflow-hidden group">
            <img src={item.img} alt="" className="bg-cover" />
          </div>
        ))}
      </div>
      <div className="flex justify-center p-8">
        <button className="bg-red-700 p-4 rounded-lg px-5 text-white font-semibold">
          Berita Lainnya
        </button>
      </div>
    </section>
  );
};

export default KegiatanUniv;
