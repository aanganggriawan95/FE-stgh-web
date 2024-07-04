import { useRef } from "react";
import { Panel } from "primereact/panel";

export default function PanelAkreditasiKampus() {
  const ref = useRef(null);
  return (
    <div className="md:mx-10">
      <Panel
        ref={ref}
        header="Akreditasi Kampus"
        className="border mb-10"
        toggleable
      >
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs  uppercase bg-gray-900 text-white dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Institusi
                </th>
                <th scope="col" className="px-6 py-3">
                  Akreditasi
                </th>
                <th scope="col" className="px-6 py-3">
                  Sertifikat
                </th>
                <th scope="col" className="px-6 py-3">
                  Nomor SK
                </th>
                <th scope="col" className="px-6 py-3">
                  Masa Berlaku (dd/mm/yyyy)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
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
                <td className="px-6 py-4">8934/SK/BAN-PT/AK-PPJ/S/VI/2021</td>
                <td className="px-6 py-4">18 Juni 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Panel>
      <Panel
        ref={ref}
        header="Akreditasi Kampus"
        className="border mb-10"
        toggleable
      >
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs bg-gray-900 text-white uppercase  dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Institusi
                </th>
                <th scope="col" className="px-6 py-3">
                  Akreditasi
                </th>
                <th scope="col" className="px-6 py-3">
                  Sertifikat
                </th>
                <th scope="col" className="px-6 py-3">
                  Nomor SK
                </th>
                <th scope="col" className="px-6 py-3">
                  Masa Berlaku (dd/mm/yyyy)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700">
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
                <td className="px-6 py-4">8934/SK/BAN-PT/AK-PPJ/S/VI/2021</td>
                <td className="px-6 py-4">18 Juni 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Panel>
      <Panel
        ref={ref}
        header="Akreditasi Kampus"
        className="border mb-10"
        toggleable
      >
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs bg-gray-900 text-white uppercase  dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Institusi
                </th>
                <th scope="col" className="px-6 py-3">
                  Akreditasi
                </th>
                <th scope="col" className="px-6 py-3">
                  Sertifikat
                </th>
                <th scope="col" className="px-6 py-3">
                  Nomor SK
                </th>
                <th scope="col" className="px-6 py-3">
                  Masa Berlaku (dd/mm/yyyy)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700">
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
                <td className="px-6 py-4">8934/SK/BAN-PT/AK-PPJ/S/VI/2021</td>
                <td className="px-6 py-4">18 Juni 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
}
