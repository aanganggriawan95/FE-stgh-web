import Navbar from "../Navbar";
import Footer from "../../Item/footer";
import "flowbite";
import Jumbotron from "../../Item/jumbotron";
const Akreditasi = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron judul={"Akreditasi"} />
      <div className="px-6">
        <nav
          className="flex   py-6  md:border-b shadow-lg md:shadow-none"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                  Sejarah
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="text-justify">
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

        <div
          className="my-10"
          id="accordion-color"
          data-accordion="collapse"
          data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
        >
          <h2 id="accordion-color-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gradient-to-r from-red-700 to-black hover:text-white dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-color-body-1"
              aria-expanded="true"
              aria-controls="accordion-color-body-1"
            >
              <span className="">Akreditasi Kampus</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-color-body-1"
            className="hidden"
            aria-labelledby="accordion-color-heading-1"
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Institusi
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Akreditasi
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Sertifikat
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Nomor SK
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Masa Berlaku (dd/mm/yyyy)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Sekolah Tinggi Hukum Galunggung
                      </th>
                      <td className="px-6 py-4">Baik</td>
                      <td className="px-6 py-4">
                        <a href="/profil/akreditasiPT">Likat Akreditasi</a>
                      </td>
                      <td className="px-6 py-4">
                        8934/SK/BAN-PT/AK-PPJ/S/VI/2021
                      </td>
                      <td className="px-6 py-4">18 Juni 2026</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <h2 id="accordion-color-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-color-body-2"
              aria-expanded="false"
              aria-controls="accordion-color-body-2"
            >
              <span>Akreditasi Sarjana Hukum</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-color-body-2"
            className="hidden"
            aria-labelledby="accordion-color-heading-2"
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out the{" "}
                <a
                  href="https://flowbite.com/figma/"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Figma design system
                </a>{" "}
                based on the utility classNamees from Tailwind CSS and
                components from Flowbite.
              </p>
            </div>
          </div>
          <h2 id="accordion-color-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-color-body-3"
              aria-expanded="false"
              aria-controls="accordion-color-body-3"
            >
              <span>Akreditasi Magister Hukum</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-color-body-3"
            className="hidden"
            aria-labelledby="accordion-color-heading-3"
          >
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Learn more about these technologies:
              </p>
              <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Akreditasi;
