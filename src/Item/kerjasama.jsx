const image = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1715440184646-0da47d6d88f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1715645973101-f07bc6951c03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1715858145910-6f534b427b7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1715630913928-80a70753706a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    img: "https://plus.unsplash.com/premium_photo-1664304582040-4f6c69c8380c?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1715440184646-0da47d6d88f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1715645973101-f07bc6951c03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1715858145910-6f534b427b7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1715630913928-80a70753706a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    img: "https://plus.unsplash.com/premium_photo-1664304582040-4f6c69c8380c?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1715440184646-0da47d6d88f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1715645973101-f07bc6951c03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    img: "https://images.unsplash.com/photo-1715858145910-6f534b427b7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    img: "https://images.unsplash.com/photo-1715630913928-80a70753706a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    img: "https://plus.unsplash.com/premium_photo-1664304582040-4f6c69c8380c?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
import JudulInformasi from "./judulInformasi";
const Kerjasama = () => {
  return (
    <section className="px-5 md:px-10 pb-8">
      <div>
        <JudulInformasi title={"KEGIATAN UNIVERSITAS"} />
        <div className="flex w-full pt-8 overflow-hidden">
          <div className="flex scroll-animation gap-2">
            {image.map((src, index) => (
              <a
                key={src.id}
                href=""
                className="w-40 h-44 md:w-80 block md:h-96"
              >
                <img
                  key={index}
                  src={src.img}
                  alt={`Slide ${index}`}
                  className="w-80 h-96 object-cover inline-block rounded-lg"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kerjasama;
