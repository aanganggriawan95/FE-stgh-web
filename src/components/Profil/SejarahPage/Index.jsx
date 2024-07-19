import Navbar from "../../Navbar";
import Footer from "../../../Item/footer";
import "flowbite";
import { useEffect, useState } from "react";
import axios from "axios";

// import { useEffect, useRef, useState } from "react";
const Sejarah = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sthg.labtekcmr.com/api/cms/getSejarah"
        );
        setData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Gagal mengambil detail visi dan misi:", error.message);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="font-sans">
      <Navbar />

      <section className="relative  mt-[80px] bg-[url(/gambar/aula.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gray-900/75  ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 md:flex lg:h-screen md:items-center md:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-bold text-white sm:text-3xl border-l-4 border-red-700 bg-yellow-400 p-2 px-4">
              Tentang STHG
            </h1>
          </div>
        </div>
      </section>
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
                Tentang
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="px-4 md:px-16">
        <div className="text-center flex items-center justify-center">
          <h1 className=" mt-10 text-3xl p-4 border-b-4 border-yellow-400 ">
            Pimpinan
          </h1>
        </div>
        <div className="py-10">
          <div className="w-full">
            <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
              <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-start ltr:sm:text-left rtl:sm:text-right">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                      Pimpinan STHG
                    </h2>
                    <h2 className="text-2xl font-bold text-gray-900 md:text-xl">
                      Herdy Mulyana, S.H, M.H
                    </h2>
                  </div>

                  <p className="hidden text-gray-500 md:mt-4 md:block">
                    Prof. Reini Wirahadikusumah, Ph.D. adalah rektor wanita
                    pertama di Institut Teknologi Bandung untuk periode
                    2020-2025 yang melanjutkan kepemimpinan Prof. Dr. Ir.
                    Kadarsah Suryadi, DEA sebagai rektor Institut Teknologi
                    Bandung periode 2015-2020.
                  </p>

                  <div className="mt-4 md:mt-8">
                    <a
                      href="#"
                      className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                      Get Started Today
                    </a>
                  </div>
                </div>
              </div>

              <img
                alt=""
                src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
              />
            </section>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-16">
        <div className="text-center  flex items-center justify-center">
          <h1 className=" mt-10 text-3xl p-4 border-b-4 border-yellow-400 ">
            History
          </h1>
        </div>

        <section className="bg-gray-50 my-10">
          <div className="p-4 border md:p-8 flex flex-col gap-10 ">
            {data.map((item, key) => (
              <div key={key} className="w-full text-justify">
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  {item.judul}
                </h2>

                <p className=" text-gray-500 sm:mt-4 sm:block">
                  {item.deskripsi_sejarah}
                </p>
              </div>
            ))}
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  1971
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Pemilu 1971
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Pemilu 1971 menimbulkan trauma yang mendalam di hati
                  masyarakat Tasikmalaya. Banyak di antara anggota masyarakat
                  yang mendapatkan tekanan dan hak-hak asasi mereka
                  diinjak-injak karena tidak mau memilih partai politik yang
                  sedang berkuasa saat itu. Oleh karena keadaan yang demikian
                  memprihatinkan ini, maka pengurus Yayasan Galunggung
                  berinisiatif untuk menyumbangkan pikiran, tenaga, maupun
                  sumber daya yang bisa membuat perubahan dan membela
                  kepentingan dan hak-hak asasi masyarakat Tasikmalaya.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Learn more{" "}
                  <svg
                    className="w-3 h-3 ms-2 rtl:rotate-180"
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
              </li>
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  1974
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Pendirian Sekolah Tinggi Hukum Galunggung (STHG) Tasikmalaya
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Dengan anjuran dari bapak Prof. Mochtar Kusumaatmadja, yang
                  ditemui oleh Ketua Umum Yayasan Galunggung saat itu, KH.
                  Lukmanul Hakim, beliau memberikan saran agar membuka fakultas
                  hukum di Tasikmalaya. Ini diperlukan supaya masyarakat di
                  Tasikmalaya dapat terbuka pikirannya dan bisa memperjuangkan
                  hak-hak asasinya secara mandiri. Inilah yang menjadi latar
                  belakang dan sejarah pendirian STHG di Tasikmalaya.
                </p>
              </li>
              <li className="ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  STHG Tasikmalaya
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Kini berusaha untuk melayani masyarakat Tasikmalaya dengan
                  lebih baik dengan cara mendidik para generasi muda maupun
                  memberi pencerahan kepada khalayak masyarakat yang lebih luas
                  untuk memahami hak dan kewajibannya sebagai warga negara
                  Indonesia.
                </p>
              </li>
            </ol>
          </div>
        </section>
      </div>
      <div className="px-4 md:px-16">
        <div className="text-center flex items-center justify-center">
          <h1 className=" mt-10 text-3xl p-4 border-b-4 border-yellow-400 ">
            Sekilas Profil
          </h1>
        </div>
        <div className="py-10">
          <div className="w-full">
            <iframe
              className="w-full "
              width="560"
              height="315"
              src="https://www.youtube.com/embed/UjC6U0Ld8Dw?si=xSBfzoaY-wN9d3n3"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sejarah;
