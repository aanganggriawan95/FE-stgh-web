import InstagramEmbed from "./embededIg";
import JudulInformasi from "./judulInformasi";
const Medsos = () => {
  return (
    <section className="px-5 md:px-16">
      <div>
        <JudulInformasi title={"SOSIAL MEDIA"} />
        <div className="flex flex-col md:flex-row w-full pt-8">
          <div className="w-full md:w-1/2">
            <InstagramEmbed />
          </div>
          <div className="w-full flex flex-col gap-4 md:w-1/2">
            <iframe
              className="w-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/UjC6U0Ld8Dw?si=xSBfzoaY-wN9d3n3"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-full"
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fsth.galunggung.142%2Fposts%2F947660906857098%3A354051127684203&show_text=true&width=500&is_preview=true"
              width="500"
              height="533"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Medsos;
