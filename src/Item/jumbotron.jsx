const Jumbotron = ({ judul, img }) => {
  return (
    <section className="relative md:mt-20 bg-[url(https://th.bing.com/th/id/OIP.4SbBivsVsWAUoF8wl2ij_QHaEK?rs=1&pid=ImgDetMain)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 flex justify-center sm:px-6 lg:flex lg:h-[400px] lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
            Sarjana Hukum
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
