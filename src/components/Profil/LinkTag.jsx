const LinkTag = () => {
  return (
    <div className="">
      <ul className="text-sm">
        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4 pl-2">
          <a href="#" className="font-medium text-gray-900">
            Visi dan misi
          </a>
        </div>

        <div className=" py-3 border-t border-black pl-2">
          <a href="#" className="font-medium text-gray-900">
            Sejarah STHG
          </a>
        </div>

        <div className="py-3 border-t border-black pl-2">
          <a href="#" className="font-medium text-gray-900">
            Fasilitas
          </a>
        </div>

        <div className="py-3 border-t border-black border-b pl-2">
          <a href="#" className="font-medium text-gray-900">
            Akreditasi
          </a>
        </div>
      </ul>
    </div>
  );
};

export default LinkTag;
