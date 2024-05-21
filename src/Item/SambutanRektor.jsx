const Sambutan_Rektor = () => {
  return (
    <div className=" bg-[#474747] lg:flex items-center justify-center gap-4 overflow-hidden w-full ">
      <div className="w-full">
        <img
          className="w-full overflow-hidden"
          src="/public/gambar/jokowi.jpg"
          alt=""
        />
      </div>
      <article className="w-full flex flex-col gap-4 justify-center text-white md:py-8">
        <h1 className="pt-8 md:pt-0 text-3xl text-center font-bold pb-4">
          Sambutan Rektor
        </h1>
        <p className="pb-10 md:pb-0 px-8 text-xl">
          Selamat datang di official website. Universitas Pasundan merupakan
          perguruan tinggi yang berada di bawah yayasan Pendidikan Tinggi (YPT)
          14 November 1960 dah hingga saat ini telah menghasikan lebih dari 70
          ribu lulusan. Sebagai salah satu pionir penyelenggara pendidikan
          tinggi di kota bandung. Universitas Pasundan senantiasa memperbaiki
          kualitas dan mengikuti perkembangan zaman untuk menjawab kebutuhan
          masyarakat. Universitas Pasundan kini telah meneguhkan komitmen untuk
          menjadi Entreprenerial University yang memiliki jati diri keislaman
          dan kesaudaraan di tahun 2037{" "}
        </p>
      </article>
    </div>
  );
};

export default Sambutan_Rektor;
