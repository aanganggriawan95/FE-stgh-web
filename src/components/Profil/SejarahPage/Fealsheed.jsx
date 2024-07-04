import { Fieldset } from "primereact/fieldset";

export default function FieldsetContent() {
  return (
    <Fieldset
      legend="Sejarah STHG"
      className="border mx-10 font-sans"
      toggleable
    >
      <p className="mb-2 text-gray-500 dark:text-gray-400 text-justify font-sans">
        Sekolah Tinggi Hukum Galunggung (STHG) Tasikmalaya didirikan pada tahun
        1974 dan merupakan salah satu perguruan tinggi tertua di wilayah
        Tasikmalaya. Maksud umum dari pendirian STHG adalah melayani kebutuhan
        pendidikan tinggi masyarakat Tasikmalaya dan juga suatu maksud yang
        khusus, yaitu membela dan memperjuangkan hak-hak asasi masyarakat
        Tasikmalaya. Sebab, situasi sosial dan politik di tahun 1971 sangat
        mengkhawatirkan. Pemilu 1971 menimbulkan trauma yang mendalam di hati
        masyarakat Tasikmalaya. Banyak di antara anggota masyarakat yang
        mendapatkan tekanan dan hak-hak asasi mereka diinjak-injak karena tidak
        mau memilih partai politik yang sedang berkuasa saat itu.
      </p>
      <p className="mb-2 text-gray-500 dark:text-gray-400 text-justify font-sans">
        Oleh karena keadaan yang demikian memprihatinkan ini, maka pengurus
        Yayasan Galunggung berinisiatif untuk menyumbangkan pikiran, tenaga,
        maupun sumber daya yang bisa membuat perubahan dan membela kepentingan
        dan hak-hak asasi masyarakat Tasikmalaya. Dengan anjuran dari bapak
        Prof. Mochtar Kusumaatmadja, yang ditemui oleh Ketua Umum Yayasan
        Galunggung saat itu, KH. Lukmanul Hakim, beliau memberikan saran agar
        membuka fakultas hukum di Tasikmalaya. Ini diperlukan supaya masyarakat
        di Tasikmalaya dapat terbuka pikirannya dan bisa memperjuangkan hak-hak
        asasinya secara mandiri. Inilah yang menjadi latar belakang dan sejarah
        pendirian STHG di Tasikmalaya.
      </p>
      <p className="mb-2 text-gray-500 dark:text-gray-400 text-justify font-sans">
        Dengan masih memegang semangat serupa itu, STHG Tasikmalaya kini
        berusaha untuk melayani masyarakat Tasikmalaya dengan lebih baik dengan
        cara mendidik para generasi muda maupun memberi pencerahan kepada
        khalayak masyarakat yang lebih luas untuk memahami hak dan kewajibannya
        sebagai warga negara Indonesia.
      </p>
    </Fieldset>
  );
}
