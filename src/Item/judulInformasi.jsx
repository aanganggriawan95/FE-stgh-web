// eslint-disable-next-line react/prop-types
const JudulInformasi = ({ title }) => {
  return (
    <div className="flex justify-center w-full items-center relative py-14 md:py-20 md:px-16 uppercase">
      <span className="w-full h-1 md:h-[2px] bg-slate-200"></span>
      <h1 className="font-bold absolute text-lg md:text-xl text-center bg-white p-2 border-2 px-4 text-black">
        {title}
      </h1>
    </div>
  );
};

export default JudulInformasi;
