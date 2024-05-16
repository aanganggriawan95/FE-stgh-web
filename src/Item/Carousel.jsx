const Carousel = () => {
  return (
    <div>
      <video autoPlay loop muted className="w-full pt-20">
        <source src="/public/vidio/vidio.mp4" />
      </video>
    </div>
  );
};

export default Carousel;
