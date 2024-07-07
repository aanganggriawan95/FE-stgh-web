import { useEffect, useState } from "react";
import LayoutBerita from "../../Layout/Layout_Berita";
import axios from "axios";
import { useParams } from "react-router";

const token = "3|jRCC39mbYstS3oraFVn4zzmmCk6ghJqY3p5Sz4Ae875828fb";

const DetailKegiatan = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  console.log(data);

  useEffect(() => {
    try {
      axios
        .post(
          "http://127.0.0.1:8000/api/cms/detailKegiatan",
          {
            id_kegiatan: id,
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => setData(res.data.data));
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LayoutBerita>
      <div className="mt-20 md:mt-32 pt-10  h-auto px-6 md:px-10">
        <h1>Halaman Detail Kegiatan</h1>
        <div className="flex gap-6">
          <article className="w-full md:w-[70%]">
            <div id="judul" className="pb-10">
              <h1 className="text-3xl font-bold">{data.judul}</h1>
            </div>
            <div>
              <img
                src="/gambar/fasilitas.jpg"
                alt=""
                className="w-full h-[400px] mb-10"
              />
            </div>
            <article className="mb-10">
              <p className="text-justify font-semibold ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                perferendis molestias porro consequatur nisi accusamus excepturi
                natus dignissimos facilis distinctio repellat accusantium
                corporis nemo earum commodi, eligendi in numquam itaque ipsa
                soluta quos. Est consectetur quisquam hic quidem magnam ea
                dolores numquam similique magni eius, cupiditate ad accusamus
                nihil neque aspernatur cum vel. Cumque rerum rem qui fugit culpa
                delectus ut, nihil modi magnam totam placeat aliquam, aperiam
                voluptas laudantium esse itaque corrupti vitae! Laborum,
                consequuntur. Nulla, sit illum nihil repellat ratione est quis
                rerum, cum aspernatur, excepturi voluptatem. Architecto ea,
                reiciendis iste quis, nemo blanditiis earum perferendis libero
                inventore, nisi minima voluptatibus enim adipisci! Nam, alias
                saepe corrupti minus dolore sapiente quis expedita blanditiis
                ipsam. Eveniet, minima quae fugit beatae ex ipsa atque esse
                officiis tempora quaerat assumenda omnis totam cupiditate iusto,
                laborum, nisi recusandae blanditiis delectus quod! Perferendis
                cupiditate rerum totam quis quibusdam, earum veritatis fugit
                necessitatibus explicabo quidem aspernatur vel suscipit minus
                odio reiciendis tenetur sit molestias cum neque dolore itaque
                quo harum. Quos inventore reiciendis assumenda illo, suscipit
                consectetur sequi expedita repudiandae nobis dicta iste numquam
                ducimus error corrupti deserunt harum facilis magnam, sit unde
                cum? Ad illum laboriosam deserunt cupiditate odit aperiam enim
                aut provident deleniti molestiae commodi, sed debitis vel
                doloremque corporis! Odit pariatur nesciunt soluta ipsam
                exercitationem aliquid consequatur ad laboriosam consequuntur
                autem dolorum, sequi magnam? Sunt, reiciendis veniam.
                Consectetur repudiandae quisquam dolore maxime dolorum nostrum
                error maiores, ex fugit quis saepe sit iure dicta odio! Animi
                distinctio, deserunt aliquam, aut iste molestias deleniti totam
                consequuntur qui adipisci nisi sapiente fugiat quaerat rem
                nihil, architecto accusantium ipsa consectetur nesciunt maxime
                corrupti ipsam veniam velit culpa! Laudantium nulla deserunt,
                quod non labore voluptas doloremque commodi. Neque eligendi
                assumenda beatae. In, reiciendis aliquid. Optio dolore maxime
                fuga, harum autem odit libero facilis minima accusantium
                exercitationem.
              </p>
            </article>
          </article>

          <div className="w-[30%] hidden md:block ">
            <h1 className="text-xl font-bold mb-10">Berita Terbaru</h1>
            <div className="flex flex-col  h-screen overflow-auto gap-4">
              <div className="">
                <a
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src="/docs/images/blog/image-4.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src="/docs/images/blog/image-4.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src="/docs/images/blog/image-4.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src="/docs/images/blog/image-4.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src="/docs/images/blog/image-4.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src="/docs/images/blog/image-4.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src="/docs/images/blog/image-4.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src="/docs/images/blog/image-4.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src="/docs/images/blog/image-4.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src="/docs/images/blog/image-4.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src="/docs/images/blog/image-4.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src="/docs/images/blog/image-4.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src="/docs/images/blog/image-4.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src="/docs/images/blog/image-4.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutBerita>
  );
};
export default DetailKegiatan;
