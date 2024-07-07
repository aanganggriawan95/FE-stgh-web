import JudulInformasi from "./judulInformasi";

const companies = [
  {
    id: 1,
    name: "iNews.id",
    logo: "https://via.placeholder.com/150",
    alt: "iNews.id Logo",
  },
  {
    id: 2,
    name: "Yahoo! Berita",
    logo: "https://via.placeholder.com/150",
    alt: "Yahoo! Berita Logo",
  },
  {
    id: 3,
    name: "Tech In Asia",
    logo: "https://via.placeholder.com/150",
    alt: "Tech In Asia Logo",
  },
  {
    id: 4,
    name: "Merdeka.com",
    logo: "https://via.placeholder.com/150",
    alt: "Merdeka.com Logo",
  },
  {
    id: 5,
    name: "Indo Zone",
    logo: "https://via.placeholder.com/150",
    alt: "Indo Zone Logo",
  },
  {
    id: 6,
    name: "DailySocial.id",
    logo: "https://via.placeholder.com/150",
    alt: "DailySocial.id Logo",
  },
  {
    id: 7,
    name: "detikcom",
    logo: "https://via.placeholder.com/150",
    alt: "detikcom Logo",
  },
];

const Kerjasama = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-100">
      <JudulInformasi title={"KERJASAMA STHG"} />
      <div className="flex flex-wrap gap-8 items-center justify-center">
        {companies.map((company) => (
          <div key={company.id} className="flex justify-center items-center">
            <img src={company.logo} alt={company.alt} className="h-24" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kerjasama;
