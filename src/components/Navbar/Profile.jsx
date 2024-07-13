const Profile = () => {
  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="m-1 uppercase">
        PROFILE
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-md z-[1] w-52 p-2 shadow"
      >
        <li className="">
          <a href="/profil/visi&misi" className="text-black">
            Visi & Misi
          </a>
        </li>
        <li>
          <a href="/profil/sejarah" className="text-black">
            Tentang STHG
          </a>
        </li>
        <li>
          <a href="/profil/fasilitas" className="text-black">
            Fasilitas
          </a>
        </li>
        <li>
          <a href="/profil/akreditasi" className="text-black">
            Akreditasi
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
