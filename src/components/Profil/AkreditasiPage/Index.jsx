import Navbar from "../../Navbar";
import Footer from "../../../Item/footer";
import "flowbite";
import PanelAkreditasiKampus from "./Panel";
const Akreditasi = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <section className="relative  mt-[80px] bg-[url(/gambar/aula.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gray-900/75  ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 md:flex lg:h-screen md:items-center md:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-bold text-white sm:text-3xl border-l-4 border-red-700 bg-yellow-400 p-2 px-4">
              Akreditasi
            </h1>
          </div>
        </div>
      </section>
      <div className="">
        <nav
          className="flex py-6 px-6 md:px-16  md:border-b shadow-md md:shadow-none"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </a>
            </li>

            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                  Profile
                </span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                  Akreditasi
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="text-justify my-10 px-6 md:px-16">
          <p>
            Badan Akreditasi Nasional Pendidikan Tinggi (BAN-PT) adalah
            satu-satunya lembaga akreditasi yang diakui oleh Kementerian
            Pendidikan Nasional Republik Indonesia. BAN-PT mengawasi kualitas
            dan efisiensi pendidikan tinggi melalui proses akreditasi semua
            program studi di institusi pendidikan tinggi di Indonesia. BAN PT
            telah memberikan informasi kepada publik tentang status akreditasi
            mata kuliah atau program studi di institusi tersebut, sehingga
            masyarakat meyakini tentang kualitas pendidikan yang ditawarkan dan
            kualitas program-program ini dapat dipertahankan dan ditingkatkan.
          </p>
          <p>
            Berdasarkan surat keputusan Badan Akreditasi Nasional Pendidikan
            Tinggi (BAN-PT) No. 407/SK/BAN-PT/AK-ISK/PT/2021 tahun 2021, Telkom
            University berhasil meraih akreditasi Unggul, dan menjadi Perguruan
            Tinggi Swasta (PTS) pertama di Indonesia yang meraih akreditasi
            Unggul. Saat ini Telkom University memiliki 50 Program Studi yang
            telah terakreditasi BAN-PT, sebanyak 53% telah terakreditasi
            Unggul/A.
          </p>
        </div>

        <PanelAkreditasiKampus />
      </div>
      <Footer />
    </div>
  );
};

export default Akreditasi;
